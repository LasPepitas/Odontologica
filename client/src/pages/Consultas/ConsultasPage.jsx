import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav';
import HeaderDashboard from '../../layouts/HeaderDashboard';
import { useEffect, useState } from 'react';
import Options from '../../layouts/Options';
import consultas from './consultas.json';
import { DeleteIcon, DetailsIcon, EditIcon } from '../../assets/icons';
import Tablas from './Tablas.jsx';

const ConsultasPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dataPendiente, setDataPendiente] = useState([]);
    const [dataPasada, setDataPasada] = useState([]);
    const [formulario, setFormulario] = useState(false);
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                setDataPendiente(consultas.consultas.filter(consulta => consulta.estado === 'pendiente'));
                setDataPasada(consultas.consultas.filter(consulta => consulta.estado === 'pasada'));
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                // Podrías establecer un estado de error aquí y mostrar un mensaje al usuario
            }
        };
      
        obtenerDatos();
    }, []);


    const handleAddButton = (fecha, hora) => {
        setFormulario(true);
        // Si deseas realizar alguna acción específica al agregar una nueva consulta, puedes hacerlo aquí
    };    

    const handleFilterButton = () => {
        console.log('acción');
        // Aquí podrías agregar la lógica para filtrar las consultas pasadas si es necesario
    }; 

    return (
        <div className='w-full h-screen flex flex-col font-imprima'>
            <HeaderDashboard showMenu={toggleMenu}></HeaderDashboard>
            <div className='w-full h-full md:flex bg-[#D9D9D9] flex-row relative'>
                <div className='hidden md:flex'>
                    <SideNav name={user?.name}></SideNav>
                </div>
                <div className='md:w-[70%] w-full h-full relative'>
                    {isMenuOpen && <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-10"></div>}
                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        {isMenuOpen && <Options className="bg-white shadow-lg rounded-md"/>}
                    </div>
                    {(!isMenuOpen) ? <div className='absolute inset-0 flex flex-col m-2 z-30'>
                        <div className='flex justify-start text-3xl mb-4'>
                            <p>Consultas</p>
                        </div>
                        <p className='text-xl text-red-600 mb-4 underline'>Consultas Pendientes</p>
                        {(!isLoading && dataPendiente.length !== 0) &&
                            <Tablas data={dataPendiente} 
                                botones={[
                                    { id: 1, icon: EditIcon, funcion: handleAddButton },
                                    { id: 2, icon: DeleteIcon, funcion: handleAddButton }
                                ]}
                            />
                        }
                        
                        <p className='text-xl text-green-600 mt-10 mb-4 underline'>Consultas Pasadas</p>
                        {(!isLoading && dataPasada.length !== 0) &&
                            <Tablas data={dataPasada} 
                                botones={[
                                    { id: 2, icon: DetailsIcon, funcion: handleFilterButton }
                                ]}
                            />
                        }
                    </div> : null}

                </div>
            </div>
        </div>
    )
}

export default ConsultasPage;

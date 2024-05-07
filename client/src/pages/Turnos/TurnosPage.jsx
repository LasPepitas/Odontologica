import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav'
import HeaderDashboard from '../../layouts/HeaderDashboard';
import { useEffect, useState } from 'react';
import Options from '../../layouts/Options';
import fechasJson from './fechas.json';
import { AddIcon } from '../../assets/icons';
import FormularioModal from './FormularioModal';

const TurnosPage = () =>{
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [data, SetData] = useState([])
    const [formulario, SetFormulario] = useState(false)
    const [diaCita, setDiaCita] = useState([])
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
              const response = await fetch(`data:application/json,${encodeURIComponent(JSON.stringify(fechasJson))}`);
              SetData(await response.json());
              console.log(data)
            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          obtenerDatos();
    }, []);


    const handleAddButton = (fecha, hora) => {
        setDiaCita([fecha, hora])
        SetFormulario(true)
    }    

    const handleFilterButton = (e) => {
        e.preventDefault();
        console.log('acción');
    } 

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
                        <div className='flex justify-start'>
                            <button className='bg-[#11728D] text-white my-2 px-4 py-2 rounded-lg hover:cursor-pointer md:w-52' onClick={handleFilterButton}>Filtrar</button>
                        </div>
                        {!isAuthenticated && !isLoading && (data.length != 0) &&
                        <table className='w-full table-auto md:text-center'>
                            <thead className='bg-white px-10'>
                                <th className="px-4 py-2">Fecha</th>
                                <th className="px-4 py-2">Hora</th>
                                <th className="px-4 py-2">Acciones</th>
                            </thead>
                            <tbody>
                                {data.registros.map(registro =>
                                    (<tr key={registro.id} className="bg-white">
                                        <td className="border px-4 py-2">{registro.fecha}</td>
                                        <td className="border px-4 py-2">{registro.hora}</td>
                                        <td className="border px-4 py-2 flex justify-center">
                                            <button type='button' className='hover:cursor-pointer' onClick={()=>handleAddButton(registro.fecha, registro.hora)}>
                                                <img
                                                    src={AddIcon}
                                                    alt="agregado icono"
                                                    className="size-7 mx-3"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}
                    </div> : null}

                </div>
            </div>
            
            <FormularioModal open={formulario} onClose={()=>SetFormulario(false)}>{diaCita}</FormularioModal>
        </div>
    )
}

export default TurnosPage;

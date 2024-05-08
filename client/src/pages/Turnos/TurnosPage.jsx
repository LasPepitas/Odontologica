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
    const [data, setData] = useState([])
    const [formulario, setFormulario] = useState(false)
    const [diaCita, setDiaCita] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch(`data:application/json,${encodeURIComponent(JSON.stringify(fechasJson))}`);
                setData(await response.json());
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        obtenerDatos();
    }, []);

    const handleAddButton = (fecha, hora) => {
        setDiaCita([fecha, hora])
        setFormulario(true)
    }    

    const handleFilterButton = (e) => {
        e.preventDefault();
        console.log('acción');
    } 

    return (
        <div>
            <div className='flex flex-col m-2 overflow-y mt-10'>
                <div className='flex justify-start gap-2'>
                    <button 
                        className='bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]' 
                        onClick={handleFilterButton}>Todos
                    </button>
                    <button 
                        className='bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]' 
                        onClick={handleFilterButton}>Disponibles
                    </button>
                </div>
                {!isAuthenticated && !isLoading && (data.length !== 0) && (
                    <table className='flex flex-col w-full md:text-center'>
                        <thead className='flex w-full bg-white text-center'>
                            <th className="w-[34%] px-4 py-2 text-center">Fecha</th>
                            <th className="w-[34%] px-4 py-2 text-center">Hora</th>
                            <th className="w-[34%] px-4 py-2 text-center">Acciones</th>
                        </thead>
                        <tbody>
                            {data.registros.map(registro => (
                                <tr key={registro.id} className="flex flex-row w-full bg-white even:bg-gray-100">
                                    <td className="w-[34%] border px-4 py-2 text-center">{registro.fecha}</td>
                                    <td className="w-[34%] border px-4 py-2 text-center">{registro.hora}</td>
                                    <td className="w-[34%] border px-4 py-2 flex justify-center">
                                        <button type='button' className='hover:cursor-pointer' onClick={() => handleAddButton(registro.fecha, registro.hora)}>
                                            <img src={AddIcon} alt="agregado icono" className="size-7 mx-3" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            
            <FormularioModal open={formulario} onClose={() => setFormulario(false)}>{diaCita}</FormularioModal>
        </div>
    )
}

export default TurnosPage;

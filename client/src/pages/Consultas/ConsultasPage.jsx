import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Confirmada from './Confirmada.jsx';
import Pendiente from './Pendiente.jsx';
import Pasadas from './Pasadas.jsx';
import Todos from './Todos.jsx';

const ConsultasPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [citas, setCitas] = useState([])
    const [opcion, setOpcion] = useState(1)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch(`https://odontologica.onrender.com/api/v1/appointments/user/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json()
                    setCitas(data)
                    setLoading(true)
    
                } else {
                    console.error('Error en la solicitud POST:', response.status);
                }
                
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
    
        obtenerDatos();
    }, []);
    

    const handleFilterButton = (opcion) => {
        if(opcion === 1){
            return <Todos isLoading={isLoading} data={citas}/>
        }
        else if(opcion===2){
            return <Confirmada isLoading={isLoading} data={citas}/>
        }
        else if(opcion===3){
            return <Pendiente isLoading={isLoading} data={citas}/>
        }
        else if(opcion===4){
            return <Pasadas isLoading={isLoading} data={citas}/>
        }
    };

    return (
        <div>
            <div className="flex flex-col m-2 ">
                <div className="flex justify-start text-3xl">
                    <p>Consultas</p>
                </div>
                <div className="flex justify-start gap-2 overflow-scroll md:overflow-hidden">
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={()=>(setOpcion(1))}
                    >
                        Todos
                    </button>
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={()=>(setOpcion(2))}
                    >
                        Confirmadas
                    </button>
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={()=>(setOpcion(3))}
                    >
                        Pendientes
                    </button>
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={()=>(setOpcion(4))}
                    >
                        Pasadas
                    </button>
                </div>
                <div className='flex'>
                    {citas.length != 0 && handleFilterButton(opcion)}
                    <p className={`text-2xl ${loading ? "hidden" :"flex" }`}>Cargando...</p>
                </div>
            </div>
        </div>
    );
};

export default ConsultasPage;

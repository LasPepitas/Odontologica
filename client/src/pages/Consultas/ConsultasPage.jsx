import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { DeleteIcon, EditIcon, DetailsIcon } from '../../assets/icons';

const ConsultasPage = () => {
    const { user } = useSelector((state) => state.user);
    const [citas, setCitas] = useState([]);
    const [citasFiltradas, setCitasFiltradas] = useState([]);
    const [opcion, setOpcion] = useState(1);
    const [loading, setLoading] = useState(false);
    // TODO: Refactorizar el componente
    useEffect(() => {
        const obtenerDatos = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://odontologica.onrender.com/api/v1/appointments/user/${user.id}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                if (response.ok) {
                    const data = await response.json();
                    setCitas(data);
                    setCitasFiltradas(data);
                } else {
                    console.error(
                        'Error en la solicitud POST:',
                        response.status,
                    );
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
            setLoading(false);
        };

        obtenerDatos();
    }, []);
    console.log(citas);
    console.log('citasFiltradas', citasFiltradas);
    const handleFilterButton = (opcion) => {
        setOpcion(opcion);
        switch (opcion) {
            case 1:
                setCitasFiltradas(citas);
                break;
            case 2:
                setCitasFiltradas(
                    citas.filter((cita) => cita.status === 'confirmed'),
                );
                break;
            case 3:
                setCitasFiltradas(
                    citas.filter((cita) => cita.status === 'pending'),
                );
                break;
            case 4:
                setCitasFiltradas(
                    citas.filter((cita) => cita.status === 'past'),
                );
                break;
            default:
                break;
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
                        className={`bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 ${
                            opcion === 1
                                ? 'text-[#4647e5] border-[#4647e5]'
                                : 'text-gray-500 border-gray-200'
                        }`}
                        onClick={() => handleFilterButton(1)}
                    >
                        Todos
                    </button>
                    <button
                        className={`bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 ${
                            opcion === 2
                                ? 'text-[#4647e5] border-[#4647e5]'
                                : 'text-gray-500 border-gray-200'
                        }`}
                        onClick={() => handleFilterButton(2)}
                    >
                        Confirmadas
                    </button>
                    <button
                        className={`bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 ${
                            opcion === 3
                                ? 'text-[#4647e5] border-[#4647e5]'
                                : 'text-gray-500 border-gray-200'
                        }`}
                        onClick={() => handleFilterButton(3)}
                    >
                        Pendientes
                    </button>
                    <button
                        className={`bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 ${
                            opcion === 4
                                ? 'text-[#4647e5] border-[#4647e5]'
                                : 'text-gray-500 border-gray-200'
                        }`}
                        onClick={() => handleFilterButton(4)}
                    >
                        Pasadas
                    </button>
                </div>
                <table className="w-full table p-2">
                    <thead className="border-b-2 table-row">
                        <th className="text-left pl-3">Fecha</th>
                        <th className="text-left">Hora</th>
                        <th className="text-left">Acciones</th>
                    </thead>
                    <tbody>
                        {citasFiltradas.map((cita) => (
                            <tr
                                key={cita.id}
                                className="w-full bg-white even:bg-gray-100 border-b-2 hover:bg-gray-100 table-row font-semibold"
                            >
                                <td className="table-cell py-2 pl-3">
                                    {new Date(cita.date).toLocaleDateString()}
                                </td>
                                <td>
                                    {new Date(cita.date).toLocaleTimeString()}
                                </td>
                                <td>
                                    {
                                        <div className="flex">
                                            <button
                                                className="hover:cursor-pointer"
                                                onClick={() => null}
                                            >
                                                <img
                                                    src={EditIcon}
                                                    alt="agregado icono"
                                                    className="size-7 mx-1 opacity-50"
                                                />
                                            </button>
                                            <button
                                                className="hover:cursor-pointer"
                                                onClick={() => null}
                                            >
                                                <img
                                                    src={DetailsIcon}
                                                    alt="agregado icono"
                                                    className="size-7 mx-1 opacity-50"
                                                />
                                            </button>
                                        </div>
                                    }
                                </td>
                            </tr>
                        ))}
                        {loading && (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    Cargando...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConsultasPage;

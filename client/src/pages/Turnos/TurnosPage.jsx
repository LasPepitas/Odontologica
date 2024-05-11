import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import fechasJson from './fechas.json';
import { AddIcon } from '../../assets/icons';
import FormularioModal from './FormularioModal';

const TurnosPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [formulario, setFormulario] = useState(false);
    const [diaCita, setDiaCita] = useState([]);
    const [fechas, setFechas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerFechas = async () => {
            try {
                const response = await fetch(
                    `data:application/json,${encodeURIComponent(
                        JSON.stringify(fechasJson),
                    )}`,
                );
                const data = await response.json();
                setFechas(data.consultas);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            }
        };

        obtenerFechas();
    }, []);

    const handleAddButton = (fecha, hora) => {
        setDiaCita([fecha, hora]);
        setFormulario(true);
    };

    const handleFilterButton = (opcion) => {
        if(opcion === 1){
            setFechas(fechasJson.consultas);
        }
        else if(opcion === 2){
            setFechas(fechasJson.consultas.filter(citas => citas.estado === "disponible"));
        }
    };

    return (
        <div>
            <div className="flex justify-start text-3xl">
                <p>Turnos</p>
            </div>
            <div className="flex flex-col m-2 overflow-y">
                <div className="flex justify-start gap-2">
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={() => handleFilterButton(1)}
                    >
                        Todos
                    </button>
                    <button
                        className="bg-white border-b-2 text-gray-500 font-bold my-2 
                        px-4 py-2 hover:cursor-pointer md:w-52 md:my-10 focus:text-[#4647e5] 
                        focus:border-[#4647e5]"
                        onClick={() => handleFilterButton(2)}
                    >
                        Disponibles
                    </button>
                </div>
                {!isLoading && !loading && fechas.length !== 0 && (
                    <table className="flex flex-col w-full md:text-center">
                        <thead className="flex w-full bg-white text-center">
                            <th className="w-[25%] px-4 py-2 text-center">
                                Fecha
                            </th>
                            <th className="w-[25%] px-4 py-2 text-center">
                                Hora
                            </th>
                            <th className="w-[25%] px-4 py-2 text-center">
                                Estado
                            </th>
                            <th className="w-[25%] px-4 py-2 text-center">
                                Acciones
                            </th>
                        </thead>
                        <tbody>
                            {fechas.map((registro) => (
                                <tr
                                    key={registro.id}
                                    className="flex flex-row w-full bg-white even:bg-gray-100 "
                                >
                                    <td className="w-[25%] border px-4 py-2 text-center">
                                        {registro.fecha}
                                    </td>
                                    <td className="w-[25%] border px-4 py-2 text-center">
                                        {registro.hora}
                                    </td>
                                    <td 
                                        className={`w-[25%] border px-4 py-2 text-center overflow-scroll md:overflow-hidden font-bold ${registro.estado === "ocupado" ? "text-red-600" : "text-green-500"}`}
                                    >
                                        {registro.estado}
                                    </td>
                                    <td className="w-[25%] border px-4 py-2 flex justify-center">
                                        <button
                                            type="button"
                                            className="hover:cursor-pointer"
                                            onClick={() =>
                                                handleAddButton(
                                                    registro.fecha,
                                                    registro.hora,
                                                )
                                            }

                                            disabled={registro.estado === "ocupado"}
                                        >
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
                    </table>
                )}
                {loading && <p>Cargando...</p>}
            </div>

            <FormularioModal
                open={formulario}
                onClose={() => setFormulario(false)}
            >
                {diaCita}
            </FormularioModal>

        </div>
    );
};

export default TurnosPage;

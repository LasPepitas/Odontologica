import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import fechasJson from './fechas.json';
import { AddIcon } from '../../assets/icons';
import FormularioModal from './FormularioModal';
import { getNextSevenDays } from '../../utilities/index';
import dayjs from 'dayjs';

const TurnosPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [formulario, setFormulario] = useState(false);
    const [diaCita, setDiaCita] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hours] = useState([
        "08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ]);
    const [fechas, setFechas] = useState([]);

    
    const obtenerFechas = async () => {
        try {
            const dias = getNextSevenDays().map(day => day.format('YYYY-MM-DD'));
            const turnosGenerados = [];
    
            const currentTime = dayjs();
    
            for (const dia of dias) {
                for (const hora of hours) {
                    const turnoHora = dayjs(`${dia} ${hora}`, 'YYYY-MM-DD HH:mm');
                    let estado = "disponible";
    
                    if (turnoHora.isBefore(currentTime)) {
                        estado = "ocupado";
                    }
    
                    turnosGenerados.push({
                        id: `${dia}-${hora}`,
                        fecha: dia,
                        hora: hora,
                        estado: estado
                    });
                }
            }
    
            setFechas(turnosGenerados);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setLoading(false);
        }
    };
    
        
    

    useEffect(() => {
        obtenerFechas();
    }, []);

    const handleAddButton = (fecha, hora) => {
        setDiaCita([fecha, hora]);
        setFormulario(true);
    };

    const handleFilterButton = (opcion) => {
        if (opcion === 1) {
            obtenerFechas()
        } else if (opcion === 2) {
            setFechas(fechas.filter(turno => turno.estado === "disponible"));
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
                            <tr className="flex w-full bg-white text-center flex-row">
                                <th className="w-[25%] px-4 py-2 text-center">Fecha</th>
                                <th className="w-[25%] px-4 py-2 text-center">Hora</th>
                                <th className="w-[25%] px-4 py-2 text-center">Estado</th>
                                <th className="w-[25%] px-4 py-2 text-center">Acciones</th>
                            </tr>
                        <tbody>
                            {fechas.map((registro) => (
                                <tr
                                    key={registro.id}
                                    className="flex flex-row w-full bg-white even:bg-gray-100 "
                                >
                                    <td className="w-[25%] border px-4 py-2 text-center flex justify-center items-center">
                                        {registro.fecha}
                                    </td>
                                    <td className="w-[25%] border px-4 py-2 text-center flex justify-center items-center">
                                        {registro.hora}
                                    </td>
                                    <td 
                                        className={`w-[25%] flex border px-4 py-2 text-center md:overflow-hidden md:font-bold 
                                        ${registro.estado === "ocupado" ? "text-red-600" : "text-green-500"} justify-center items-center`}
                                    >
                                        <span className={`${registro.estado === "disponible" ? "flex" : "hidden"} md:hidden`}>
                                            🟢
                                        </span>
                                        <span className={`${registro.estado === "ocupado" ? "flex" : "hidden"}  md:hidden`}>
                                            🔴
                                        </span>
                                        <span className={`md:flex hidden`}>
                                            {registro.estado}
                                        </span>
                                    </td>
                                    <td className="w-[25%] border px-4 py-2 flex justify-center items-center">
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
            {
                console.log(typeof(diaCita))
            }
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

import { useEffect, useState } from 'react';
import { AddIcon } from '../../assets/icons';
import FormularioModal from './FormularioModal';
import { getNextSevenDays } from '../../utilities/index';
import dayjs from 'dayjs';
import { hours } from '../../constants';
import { getAppointmentsByDentist } from '../../services';
const TurnosPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [diaCita, setDiaCita] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fechas, setFechas] = useState([]);
    const obtenerFechas = async () => {
        try {
            const appointments = await getAppointmentsByDentist(1);
            const dias = getNextSevenDays();
            console.log('----------------');
            console.log(
                'appointments',
                new Date(appointments[1].date).toISOString(),
            );
            console.log(
                'dias',
                new Date(
                    dias[1].format('YYYY-MM-DD') + ' ' + hours[1],
                ).toISOString(),
            );
            console.log('----------------');
            const fechasGeneradas = [];
            dias.forEach((dia) => {
                hours.forEach((hora) => {
                    const appointment = appointments.find((appointment) => {
                        const dateAppointment = new Date(
                            appointment.date,
                        ).toISOString();
                        const dateDay = new Date(
                            dia.format('YYYY-MM-DD') + ' ' + hora,
                        ).toISOString();
                        return dateAppointment === dateDay;
                    });
                    fechasGeneradas.push({
                        id: `${dia}-${hora}`,
                        fecha: dayjs(dia).format('DD/MM/YYYY'),
                        hora,
                        date: new Date(
                            dia.format('YYYY-MM-DD') + ' ' + hora,
                        ).toISOString(),
                        estado: appointment ? 'ocupado' : 'disponible',
                    });
                });
            });
            setFechas(fechasGeneradas);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        obtenerFechas();
    }, []);
    const handleAddButton = (date) => {
        console.log('date', date);
        setDiaCita(date);
        setIsOpenModal(true);
    };
    const handleFilterButton = (opcion) => {
        if (opcion === 1) {
            obtenerFechas();
        } else if (opcion === 2) {
            setFechas(fechas.filter((turno) => turno.estado === 'disponible'));
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
                {!loading && fechas.length !== 0 && (
                    <table className="flex flex-col w-full md:text-center">
                        <tr className="flex w-full bg-white text-center flex-row">
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
                                        ${
                                            registro.estado === 'ocupado'
                                                ? 'text-red-600'
                                                : 'text-green-500'
                                        } justify-center items-center`}
                                    >
                                        <span
                                            className={`${
                                                registro.estado === 'disponible'
                                                    ? 'flex'
                                                    : 'hidden'
                                            } md:hidden`}
                                        >
                                            🟢
                                        </span>
                                        <span
                                            className={`${
                                                registro.estado === 'ocupado'
                                                    ? 'flex'
                                                    : 'hidden'
                                            }  md:hidden`}
                                        >
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
                                                handleAddButton(registro.date)
                                            }
                                            disabled={
                                                registro.estado === 'ocupado'
                                            }
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
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                diaCita={diaCita}
            />
        </div>
    );
};

export default TurnosPage;

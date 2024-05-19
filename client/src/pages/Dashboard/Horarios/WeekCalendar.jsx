import { getNextSevenDays } from '../../../utilities';
import { hours } from '../../../constants';
import { getAppointmentsByDentist } from '../../../services/appointments';
import { useEffect, useState } from 'react';
import Modal from './Modal';

const WeekCalendar = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchAppointments = async () => {
            setLoading(true);
            const appointments = await getAppointmentsByDentist(1);
            setAppointments(appointments);
            setLoading(false);
        };
        fetchAppointments();
    }, []);
    const [modalData, setModalData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = (data) => {
        setModalData(data);
        setIsModalOpen(true);
    };
    return (
        <div className="h-full w-full my-6 overflow-y-auto">
            {isModalOpen && (
                <Modal
                    modalData={modalData}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
            <div className="h-[150%] grid grid-cols-8 bg-white rounded-xl">
                <div className="grid grid-rows-10">
                    <h4 className="font-bold justify-center flex items-center border border-gray-200">
                        Horarios
                    </h4>
                    <span className="times-schedule"> 8:00 </span>
                    <span className="times-schedule"> 9:00 </span>
                    <span className="times-schedule"> 10:00 </span>
                    <span className="times-schedule"> 11:00 </span>
                    <span className="times-schedule"> 14:00 </span>
                    <span className="times-schedule"> 15:00 </span>
                    <span className="times-schedule"> 16:00 </span>
                    <span className="times-schedule"> 17:00 </span>
                    <span className="times-schedule"> 18:00 </span>
                </div>
                {getNextSevenDays().map((day) => (
                    <div
                        key={day.format('YYYY-MM-DD')}
                        className="grid grid-rows-10"
                    >
                        <div className="flex flex-col items-center justify-center py-2 border border-gray-200">
                            <span className="capitalize font-bold">
                                {day.format('dddd')}
                            </span>
                            <span>{day.format('DD')}</span>
                        </div>
                        {hours.map((hour, index) => {
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200"
                                >
                                    {appointments.map((appointment) => {
                                        const appointmentDate = new Date(
                                            appointment.date,
                                        );
                                        const appointmentDay =
                                            appointmentDate.toLocaleDateString(
                                                'es-PE',
                                                {
                                                    timeZone: 'America/Lima',
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                },
                                            );
                                        const appointmentHour = appointmentDate
                                            .toLocaleTimeString('es-PE', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })
                                            .split(' ')[0];
                                        console.log(
                                            day.format('DD/MM/YYYY'),
                                            '=',
                                            appointmentDay,
                                            '--',
                                            hour,
                                            '=',
                                            appointmentHour,
                                        );
                                        if (
                                            day.format('DD/MM/YYYY') ==
                                                appointmentDay &&
                                            hour == appointmentHour
                                        ) {
                                            return (
                                                <button
                                                    key={appointment.id}
                                                    className="bg-blue-500 text-white p-2 h-full w-full rounded-md"
                                                    onClick={() => {
                                                        handleOpenModal(
                                                            appointment,
                                                        );
                                                    }}
                                                >
                                                    <p className="text-sm font-bold">
                                                        {appointment.user_name}
                                                    </p>
                                                    <p className="text-xs">
                                                        {
                                                            appointment.treatment_name
                                                        }
                                                    </p>
                                                </button>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeekCalendar;

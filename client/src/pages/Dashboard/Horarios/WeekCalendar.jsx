import { getNextSevenDays } from '../../../utilities';
import { hours } from '../../../constants';
import { getAppointmentsByDentist } from '../../../services/appointments';
import { useEffect, useState } from 'react';
import Modal from './Modal';
const appointments = [
    {
        id: 4,
        date: '2024-05-11',
        start: '15:00',
        end: '12:00',
        description: 'Descripción de la cita 4',
        user_name: 'Rene Ramirez',
        treatment_name: 'Ortodoncia',
    },
    {
        id: 5,
        date: '2024-05-09',
        start: '11:00',
        end: '12:00',
        description: 'Descripción de la cita 5',
        user_name: 'Juan Perez',
        treatment_name: 'Cirugía',
    },
    {
        id: 6,
        date: '2024-05-10',
        start: '14:00',
        end: '12:00',
        description: 'Descripción de la cita 6',
        user_name: 'Maria Lopez',
        treatment_name: 'Ortodoncia',
    },
];

const WeekCalendar = () => {
    // const [appointments, setAppointments] = useState([]);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const fetchAppointments = async () => {
    //         setLoading(true);
    //         const appointments = await getAppointmentsByDentist(1);
    //         setAppointments(appointments);
    //         setLoading(false);
    //     };
    //     fetchAppointments();
    // }, []);
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
                                        if (
                                            day.format('YYYY-MM-DD') ===
                                                appointment.date &&
                                            hour === appointment.start
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

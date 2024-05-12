import ModalPatients from './ModalPatient';
import { useEffect, useState } from 'react';
import { getAppointmentsByDentist } from '../../../services';
import './patients.css';

export const statusVariants = {
    pending: 'En espera',
    reserved: 'Reservado',
    cancelled: 'Cancelado',
};

const PatientsTable = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            const appointments = await getAppointmentsByDentist(1);
            setAppointments(appointments);
        };
        fetchAppointments();
    }, []);
    return (
        <section className="w-full h-full px-4 py-3 bg-white rounded-lg">
            {modalOpen && (
                <ModalPatients
                    patient={selectedPatient}
                    onClose={() => setModalOpen(false)}
                />
            )}
            <h2 className="font-extrabold text-3xl mb-8">Pacientes</h2>
            <table className="w-full rounded-lg  ">
                <thead className="font-bold text-left text-xl bg-calypso-50 text-calypso-700">
                    <tr className="table-row p-4 ">
                        <th className="px-4 py-2">Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(
                        ({
                            id,
                            id_user,
                            user_name,
                            user_lastName,
                            user_email,
                            status,
                        }) => (
                            <tr
                                key={id}
                                className="border-b-[1px] border-gray-300 text-md even:bg-gray-100 hover:bg-gray-200 "
                            >
                                <td
                                    className="table-cell py-2 sm:pl-5"
                                    data-title="Nombre:"
                                >
                                    {user_name}
                                </td>
                                <td
                                    className="table-cell py-2"
                                    data-title="Apellido:"
                                >
                                    {user_lastName ?? 'No disponible'}
                                </td>
                                <td
                                    className="table-cell py-2"
                                    data-title="Email:"
                                >
                                    {user_email}
                                </td>
                                <td
                                    data-title="Estado:"
                                    className={` font-bold table-cell py-2
                                ${status === 'completed' && 'text-green-600'}
                                ${status === 'pending' && 'text-yellow-500'}
                                ${status === 'cancelled' && 'text-red-600'}
                            `}
                                >
                                    {statusVariants[status]}
                                </td>
                                <td className="font-bold gap-x-2 table-cell py-2">
                                    <button
                                        className="bg-green-400 text-white px-2 py-1 rounded-md"
                                        onClick={() => {
                                            setSelectedPatient({
                                                id_user,
                                                user_name,
                                                user_lastName,
                                                user_email,
                                                status,
                                                id_appointment: id,
                                            });
                                            setModalOpen(true);
                                        }}
                                    >
                                        Ver
                                    </button>
                                    <button className="bg-red-400 text-white px-2 py-1 rounded-md ml-3">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default PatientsTable;

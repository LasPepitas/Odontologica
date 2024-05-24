import { useParams } from 'react-router-dom';
import { getAppointmentById } from '../../../services';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientIndividual = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAppointment = async () => {
            const appointment = await getAppointmentById(id);
            if (!appointment) navigate('/dashboard/pacientes');
            setAppointment(appointment);
        };
        fetchAppointment();
    }, [id, navigate]);

    const handlePayment = () => {
        console.log('Pago confirmado');
    };

    console.log(appointment);
    return (
        <div className="p-5">
            <h2 className="font-bold text-2xl mb-5">
                Información del paciente
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="font-bold text-xl p-2 text-left">
                            Campo
                        </th>
                        <th className="font-bold text-xl p-2 text-left">
                            Valor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="font-bold text-xl p-2">Nombre:</td>
                        <td className="p-2">
                            {appointment.user_name || 'No disponible'}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Apellido:</td>
                        <td className="p-2">
                            {appointment.user_lastName ?? 'No disponible'}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Email:</td>
                        <td className="p-2">
                            {appointment.user_email || 'No disponible'}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">
                            Estado de la cita:
                        </td>
                        <td className="p-2">{appointment.status}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Fecha:</td>
                        <td className="p-2">{appointment.date}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Duración:</td>
                        <td className="p-2">{appointment.duration}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Descripción:</td>
                        <td className="p-2">{appointment.description}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">
                            Método de pago:
                        </td>
                        <td className="p-2">{appointment.payment_method}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Monto:</td>
                        <td className="p-2">{'S/. ' + appointment.amount}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">
                            Estado de pago:
                        </td>
                        <td className="p-2">{appointment.payment_status}</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-xl p-2">Recibo:</td>
                        <td className="p-2">
                            {appointment.payment_receipt_image ? (
                                <img
                                    src={appointment.payment_receipt_image}
                                    alt="Recibo de pago"
                                    className="w-[90%] md:w-[250px]"
                                />
                            ) : (
                                <p className="py-6">No hay recibo</p>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-5 w-full flex justify-center">
                <button
                    onClick={handlePayment}
                    className="bg-blue-500 text-white py-2 px-8 w-fit rounded-md font-bold"
                >
                    Confirmar pago
                </button>
            </div>
        </div>
    );
};

export default PatientIndividual;

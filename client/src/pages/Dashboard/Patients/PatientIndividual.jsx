import { useParams } from 'react-router-dom';
import { getAppointmentById } from '../../../services';
import { useEffect, useState } from 'react';
const PatientIndividual = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        getAppointmentById(id).then((data) =>
            setAppointment({
                ...data.appointment,
                ...data.paymentAppointment,
            }),
        );
    }, [id]);
    const handlePayment = () => {
        console.log('Pago confirmado');
    };
    console.log(appointment);
    return (
        <div>
            <h2 className="font-bold text-2xl mb-5">
                Información del paciente
            </h2>
            <div>
                <div>
                    <h3 className="font-bold text-xl">Nombre:</h3>
                    <p>{appointment.user_name}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Apellido:</h3>
                    <p>{appointment.user_lastName ?? 'No disponible'}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Email:</h3>
                    <p>{appointment.user_email}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Estado de la cita:</h3>
                    <p>{appointment.status}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Fecha:</h3>
                    <p>{appointment.date}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Duración:</h3>
                    <p>{appointment.duration}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Descripción:</h3>
                    <p>{appointment.description}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Método de pago:</h3>
                    <p>{appointment.payment_method}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Monto:</h3>
                    <p>{appointment.amount}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Estado de pago:</h3>
                    <p>{appointment.status}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Recibo:</h3>
                    {appointment.payment_receipt_image ? (
                        <img
                            src={appointment.payment_receipt_image}
                            alt="Recibo de pago"
                            className="w-1/2"
                        />
                    ) : (
                        <p className="py-6">No hay recibo</p>
                    )}
                </div>
                <button
                    onClick={handlePayment}
                    className="bg-blue-500 text-white py-2 px-6 w-fit rounded-md"
                >
                    Confirmar pago
                </button>
            </div>
        </div>
    );
};

export default PatientIndividual;

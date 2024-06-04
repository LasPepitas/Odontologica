import { useParams } from 'react-router-dom';
import { getAppointmentById, updateAppointment } from '../../../services';
import { useEffect, useState } from 'react';

const PatientIndividual = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        getAppointmentById(id).then((data) => {
            setAppointment(data.appointment);
        });
    }, [id]);

    const handlePayment = async () => {
        try {
            const updatedAppointment = await updateAppointment(id, {
                status: 'completed',
            });
            setAppointment(updatedAppointment.appointment);
            window.location.href = '/dashboard/pacientes';
        } catch (error) {
            alert('Ocurrió un error al confirmar el pago');
        }
    };

    if (!appointment) {
        return (
            <div className="flex justify-center items-center h-screen w-screen fixed z-[99] top-0 left-0 right-0 bg-primary/50">
                <span className="text-white text-2xl font-semibold">
                    Cargando...
                </span>
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
                <h2 className="text-3xl font-bold text-primary mb-6 border-b pb-3">
                    Información de la Cita
                </h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        Detalles del Paciente
                    </h3>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-800">
                            <span className="font-semibold">Nombre:</span>{' '}
                            {appointment.user.name} {appointment.user.lastname}
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Email:</span>{' '}
                            {appointment.user.email}
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        Detalles de la Cita
                    </h3>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-800">
                            <span className="font-semibold">Fecha:</span>{' '}
                            {new Date(appointment.date).toLocaleString()}
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Duración:</span>{' '}
                            {appointment.duration} minutos
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Descripción:</span>{' '}
                            {appointment.description}
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Estado:</span>{' '}
                            {appointment.status}
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        Detalles del Pago
                    </h3>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-800">
                            <span className="font-semibold">Monto:</span> S/{' '}
                            {appointment.payment.amount}
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">
                                Método de Pago:
                            </span>{' '}
                            {appointment.payment.payment_method}
                        </p>
                        <div className="mt-4">
                            <img
                                src={appointment.payment.payment_receipt_image}
                                alt="Recibo de pago"
                                className="max-w-xs border rounded-md shadow"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center pb-16">
                    <button
                        onClick={handlePayment}
                        className="bg-primary font-bold text-white py-2 px-6 rounded-md shadow-md hover:bg-secondary-dark transition duration-300"
                    >
                        Confirmar pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatientIndividual;

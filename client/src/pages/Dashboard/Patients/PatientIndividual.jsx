import { useParams } from 'react-router-dom';
import { getAppointmentById } from '../../../services';
import { useEffect, useState } from 'react';
const PatientIndividual = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        getAppointmentById(id).then((data) => setAppointment(data));
    }, [id]);
    console.log(appointment);
    return (
        <div>
            <h2>Patient Individual</h2>
            <div>
                <p>
                    <span>Fecha:</span>
                    {appointment.date &&
                        new Date(appointment.date).toLocaleString()}
                </p>
                <p>
                    <span>Descripción:</span>
                    {appointment.description}
                </p>
                <p>
                    <span>Duración:</span>
                    {appointment.duration}
                </p>
                <p>
                    <span>Estado:</span>
                    {appointment.status}
                </p>
                <p>
                    <span>Creado en:</span>
                    {appointment.createdAt &&
                        new Date(appointment.createdAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default PatientIndividual;

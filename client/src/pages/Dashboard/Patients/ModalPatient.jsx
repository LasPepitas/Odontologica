/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { statusVariants } from './PatientsTable';
const ModalPatient = ({ patient, onClose }) => {
    const navigate = useNavigate();
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('fixed')) {
            onClose();
        }
    };
    return (
        <div
            className="fixed left-0 top-0 h-screen w-screen flex justify-center items-center bg-slate-600/40 px-5"
            onClick={handleOutsideClick}
        >
            <div className="md:max-w-[400px] w-full pb-5 mx-auto bg-white rounded-xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white">
                    <h2 className="font-bold text-2xl">
                        Información del paciente
                    </h2>
                    <button className="text-white" onClick={onClose}>
                        <p>Cerrar</p>
                    </button>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-xl">Nombre:</h3>
                    <p>{patient.user_name}</p>
                    <h3 className="font-bold text-xl">Apellido:</h3>
                    <p>{patient.user_lastName ?? 'No disponible'}</p>
                    <h3 className="font-bold text-xl">Email:</h3>
                    <p>{patient.user_email}</p>
                    <h3 className="font-bold text-xl">Estado:</h3>
                    <p>{statusVariants[patient.status]}</p>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-6 w-fit rounded-md"
                        onClick={() => {
                            navigate(
                                `/dashboard/pacientes/${patient.id_appointment}`,
                            );
                            onClose();
                        }}
                    >
                        Confirmar pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalPatient;

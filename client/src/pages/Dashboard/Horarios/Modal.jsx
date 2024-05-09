/* eslint-disable react/prop-types */
const Modal = ({ modalData, onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('fixed')) {
            onClose();
        }
    };
    return (
        <div
            className="fixed top-0 left-0 h-screen w-screen bg-slate-800/40"
            onClick={handleOutsideClick}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
                <h3 className="font-bold text-2xl mb-2">Cita</h3>
                <p className="text-lg">
                    <span className="font-bold">Paciente:</span>{' '}
                    {modalData.user_name}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Fecha:</span> {modalData.date}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Hora:</span> {modalData.start} -{' '}
                    {modalData.end}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Tratamiento:</span>{' '}
                    {modalData.treatment_name}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Descripción:</span>{' '}
                    {modalData.description}
                </p>
                <button
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg mt-4"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;

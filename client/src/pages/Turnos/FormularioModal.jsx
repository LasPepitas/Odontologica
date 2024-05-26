import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoaderSignal from '../../components/loaderSignal/LoaderSignal.jsx';
import { Link } from 'react-router-dom';
import { services } from '../../constants/index.js';
const FormularioModal = ({ open, onClose, diaCita }) => {
    const { user } = useSelector((state) => state.user);
    const [loader, setLoader] = useState(null);
    const [bodyForm, setBodyForm] = useState({});

    useEffect(() => {
        if (diaCita) {
            console.log(diaCita);
            setBodyForm({
                date: diaCita,
                id_user: user.id,
                id_dentist: '1',
                duration: 90,
            });
        }
    }, [diaCita, user]);
    const handleChangeLabel = (e) => {
        setBodyForm({
            ...bodyForm,
            [e.target.id]: e.target.value,
        });
    };
    const handleReservation = () => {
        if (diaCita) {
            localStorage.setItem('reserva-data', JSON.stringify(bodyForm));
        } else {
            console.log('No funciono');
        }
    };

    return (
        <div
            onClick={onClose}
            className={`
                w-full fixed inset-0 flex justify-center items-center transition-colors z-50
                ${open ? 'visible bg-black/50' : 'invisible'}
            `}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`flex flex-col md:w-3/12  w-80 h-[26rem] bg-[#E4E1E1] rounded-xl shadow transition-all 
                ${
                    open
                        ? 'scale-100 opacity-100'
                        : 'scale-125 opacity-0 font-imprima'
                }`}
            >
                <div className="w-full h-[15%] bg-[#3a38ca] text-white rounded-t-xl text-center content-center">
                    Formulario
                </div>
                <div className="flex flex-col mx-10 my-4">
                    <label htmlFor="servicios" className="mb-2">
                        Servicios
                    </label>
                    <select
                        id="id_treatment"
                        className="w-[50%] border rounded-md px-3 py-2 mb-4"
                        value={bodyForm.id_treatment}
                        onChange={(e) => handleChangeLabel(e)}
                        required
                        defaultValue={services[0].id}
                    >
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="descripcion" className="mb-2">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        className="h-28 border rounded-md px-3 py-2 resize-none overflow-auto"
                        value={bodyForm.description}
                        onChange={(e) => handleChangeLabel(e)}
                        required
                    ></textarea>

                    <div className="w-full flex my-2">
                        <Link
                            to="/pagos"
                            className="w-full flex justify-center"
                        >
                            <button
                                className="w-2/3 bg-[#636ff1] text-white my-2 px-4 py-2 hover:cursor-pointer overflow-auto rounded-lg"
                                type="submit"
                                onClick={handleReservation}
                            >
                                Pagar Reservación
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {loader && <LoaderSignal />}
        </div>
    );
};

export default FormularioModal;

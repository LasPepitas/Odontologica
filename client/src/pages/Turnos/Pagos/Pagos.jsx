import { useEffect, useState } from 'react';
import { BackArrowIcon, CopyIcon } from "../../../assets/icons";
import { Yape } from "../../../assets/images";
import { Link } from 'react-router-dom';
import AuthLayout from '../../../layouts/AuthLayout';
import LoaderSignal from '../../../components/loaderSignal/LoaderSignal';

function Pagos() {
    const [copied, setCopied] = useState(false);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [body, setBody] = useState({
        date: "",
        duration: 0,
        id_user: "",
        id_dentist: "1",
        id_treatment: "",
        description: "",
        amount: null
    });

    useEffect(() => {
        const aux = JSON.parse(localStorage.getItem("body"));

        setBody({
            date: aux.date,
            duration: aux.duration,
            id_user: aux.id_user,
            id_dentist: aux.id_dentist,
            id_treatment: aux.id_treatment,
            description: aux.description,
            amount: 5,
        });

        
        console.log(body)
    }, []);

    const handleImage = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);  // Corrected logging
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('965100861');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('date', body.date);
        formData.append('duration', body.duration);
        formData.append('id_user', body.id_user);
        formData.append('id_dentist', body.id_dentist);
        formData.append('id_treatment', body.id_treatment);
        formData.append('description', body.description);
        formData.append('amount', body.amount);
        formData.append('image', image);

        try {
            const response = await fetch('https://odontologica.onrender.com/api/v1/appointments', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Solicitud POST exitosa');
                localStorage.removeItem("body");
                window.location.href = "/dashboard/consultas";
            } else {
                console.error('Error en la solicitud POST:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <LoaderSignal />
                </div>
            ) : (
                <div className="w-screen h-screen flex flex-col bg-white pl-5 py-2 font-imprima">
                    <div className='h-[7%]'>
                        <Link to="/dashboard/turnos">
                            <img src={BackArrowIcon} alt="flecha icono" className='size-10 mb-10' />
                        </Link>
                    </div>
                    <div className='md:flex md:justify-center md:items-center h-[93%] md:flex-col md:w-full'>
                        <div className="flex flex-col h-[8%] justify-start text-3xl font-bold mx-5 md:w-full">
                            <p>Completa tu pago</p>
                        </div>
                        <div className='h-[92%] md:w-full md:flex'>
                            <div className="flex flex-col h-[45%] items-center mx-5 md:w-[50%] md:h-full md:justify-center">
                                <p className="text-gray-500">
                                    Recuerda hacer tu reserva con solo 5 soles
                                </p>
                                <img
                                    src={Yape}
                                    alt="Qr de pago"
                                    className="block w-[80%] mx-auto md:w-[60%]"
                                />
                            </div>
                            <div className='h-[40%] mx-5 md:w-[50%] md:h-full md:flex md:justify-center md:flex-col '>
                                <label className="text-gray-500">
                                    ¿No puedes escanear el QR?
                                </label>
                                <label className="text-gray-500">
                                    Este es mi número
                                </label>
                                <div className="flex items-center h-[20%] bg-gray-200 rounded-lg mb-3 md:w-[60%] md:h-[8%]">
                                    <div className="flex-grow p-4 ">
                                        965100861
                                    </div>
                                    <button className="p-4 focus:outline-none" onClick={handleCopy}>
                                        <img
                                            src={CopyIcon}
                                            alt="copia icono"
                                            className="size-10"
                                        />
                                    </button>
                                </div>
                                {copied && <p className="text-green-500 mt-2">¡Número copiado al portapapeles!</p>}

                                <form onSubmit={handleForm}>
                                    <div className='flex flex-col'>
                                        <label htmlFor='captura'>Sube una captura de tu pago</label>
                                        <input type="file" id='captura' className='mt-3' onChange={handleImage} required />
                                    </div>
                                    <div className='flex justify-center mt-4 md:justify-stretch md:ml-20'>
                                        <button
                                            className='w-[50%] h-[40px] bg-green-500 text-white rounded-lg md:w-[30%]'
                                            type="submit"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthLayout>
    );
}

export default Pagos;

import { useState } from 'react';
import {BackArrowIcon, CopyIcon } from "../../../assets/icons"
import { Yape } from "../../../assets/images"
import { Link } from 'react-router-dom';

function Pagos() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('965100861');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="w-screen h-screen flex flex-col bg-white pl-5 py-2 font-imprima">
            <div className='h-[7%]'>
                <Link to="/dashboard/turnos">
                    <img src={BackArrowIcon} alt="flecha icono" className='size-10 mb-10'/>
                </Link>
            </div>
            <div className="flex flex-col h-[8%] justify-start text-3xl font-bold mx-5">
                <p>Completa tu pago</p>
            </div>
            <div className="flex flex-col h-[45%] items-center text-center mx-5">
                <p className="text-gray-500">
                    Recuerda hacer tu reserva con solo 5 soles
                </p>
                <img 
                    src={Yape} 
                    alt="Qr de pago" 
                    className="block max-w-[80%] mx-auto"
                />
            </div>
            <div className='h-[40%] mx-5'>
                <label className="text-gray-500">
                    ¿No puedes escanear el QR? 
                </label>
                <label className="text-gray-500">
                    Este es mi número 
                </label>
                <div className="flex items-center h-[20%] bg-gray-200 rounded-lg mb-3">
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

                <div className='flex flex-col'>
                    <label htmlFor='captura'>Sube una captura de tu pago</label>
                    <input type="file" id='captura' className='mt-3'/>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='w-[50%] h-[40px] bg-green-500 text-white rounded-lg'>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagos;

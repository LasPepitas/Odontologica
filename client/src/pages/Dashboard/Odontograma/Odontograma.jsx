import { toast } from 'react-toastify';
import Odontogram from './Odontogram';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Odontograma() {

  const navigate = useNavigate();

  const handleOdont = () =>{
      toast.success("Actualizado con exito")
      navigate('/dashboard/historial');
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-3xl font-bold mb-4">Odontograma</h1>
      <div className='flex flex-col items-center justify-center p-20'>
        <Odontogram />
      </div>
      <button
        className="bg-green-500 hover:bg-green-300 duration-300 text-white font-bold py-2 px-4 rounded uppercase"
        onClick={handleOdont}
      >
        Actualizar
      </button>
    </div>
  );
}

export default Odontograma;

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FormularioModal = ({ open, onClose, children }) => {
    const { user } = useSelector((state) => state.user);
    const [treatment, setTreatment] = useState("1");
    const currentDate = ((children) ? (children[0] + 'T' + children[1] + ':00.0Z') : (""))
    const [bodyForm, setBodyForm] = useState({
        date: "",
        duration: 90,
        id_user: user.id,
        id_dentist: "1",
        id_treatment: "",
    });

    useEffect(() => {
        if(children){
            setBodyForm({
                ...bodyForm,
                date : currentDate,
                id_treatment: treatment.toString()
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [treatment]);

    const handleForm = async (e) => {
        e.preventDefault();

        setBodyForm({
            ...bodyForm,
        });

        try {
            const response = await fetch('https://odontologica.onrender.com/api/v1/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyForm)
            });
            if (response.ok) {
                console.log('Solicitud POST exitosa');
            } else {
                console.error('Error en la solicitud POST:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        }
    }

    return (
        <div onClick={onClose}
            className={`
                w-full fixed inset-0 flex justify-center items-center transition-colors z-50
                ${open ? "visible bg-black/50" : "invisible"}
            `}
        >
            <div onClick={(e) => { e.stopPropagation() }}
                className={`flex flex-col md:w-3/12  w-80 h-[26rem] bg-[#E4E1E1] rounded-xl shadow transition-all 
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0 font-imprima"}`} >
                <form onSubmit={handleForm}>
                    <div className="w-full h-[15%] bg-[#3a38ca] text-white rounded-t-xl text-center content-center">Formulario</div>
                    <div className="flex flex-col mx-10 my-4">
                        <label htmlFor="servicios" className="mb-2">Servicios</label>
                        <select
                            id="servicios"
                            className="w-[50%] border rounded-md px-3 py-2 mb-4"
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            required
                        >
                            <option value="1" >Servicio 1</option>
                            <option value="2">Servicio 2</option>
                            <option value="3">Servicio 3</option>
                            <option value="4">Servicio 4</option>
                            <option value="5">Servicio 5</option>
                        </select>
                        <label htmlFor="descripcion" className="mb-2">Descripción</label>
                        <textarea id="descripcion" className="h-28 border rounded-md px-3 py-2 resize-none overflow-auto"></textarea>

                        <div className="w-full flex justify-center my-2">
                            <button
                                className='w-2/3 bg-[#636ff1] text-white my-2 px-4 py-2  hover:cursor-pointer overflow-auto'
                                type="submit"
                            >
                                Pagar Reservacion
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioModal;

import { CloseIcon } from "../../assets/icons"

const FormularioModal = ({open, onClose, children}) => {
   
  return (
    <div onClick={onClose}
        className={`
            w-full fixed inset-0 flex justify-center items-center transition-colors z-50
            ${open ? "visible bg-black/50" : "invisible"}
        `}
    >
        <div onClick={(e)=>{e.stopPropagation()}} 
        className={`flex flex-col md:w-3/12  w-80 h-[23rem] bg-[#E4E1E1] rounded-xl shadow transition-all 
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0 font-imprima"}`} >
            <div className="w-full h-[15%] bg-[#11728D] rounded-xl text-white text-center content-center">Formulario</div> 
            <div className="flex flex-col mx-10 my-4">
                <label htmlFor="servicios" className="mb-2">Servicios</label>
                <select id="servicios" className="w-[50%] border rounded-md px-3 py-2 mb-4">
                    <option value="servicio1" >Servicio 1</option>
                    <option value="servicio2">Servicio 2</option>
                    <option value="servicio3">Servicio 3</option>
                </select>
                <label htmlFor="descripcion" className="mb-2">Descripción</label>
                <textarea id="descripcion" className="h-28 border rounded-md px-3 py-2 resize-none overflow-auto"></textarea>

                <div className="w-full flex justify-center my-2">
                    <button className='w-2/3 bg-[#11728D] text-white my-2 px-4 py-2 rounded-lg hover:cursor-pointer' >Enviar</button>
                </div>
            </div>

        </div>     
    </div>
  )
}

export default FormularioModal
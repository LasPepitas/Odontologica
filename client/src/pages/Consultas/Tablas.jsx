const Tablas = ({ data, botones }) => {
  return (
    <div>
      <table className='flex flex-col w-full md:text-center'>
        <thead className='flex w-full bg-white text-center'>
            <th className="w-[34%] px-4 py-2 text-center">Fecha</th>
            <th className="w-[33%] px-4 py-2 text-center">Hora</th>
            <th className="w-[33%] px-4 py-2 text-center">Acciones</th>
        </thead>
        <tbody>
          {data.map(registro => (
            <tr key={registro.id} className="flex flex-row w-full bg-white even:bg-gray-100">
              <td className="w-[34%] border px-4 py-2 text-center">{registro.fecha}</td>
              <td className="w-[33%] border px-4 py-2 text-center">{registro.hora}</td>
              <td className="w-[33%] border px-4 py-2 flex justify-center">
                {botones && botones.length !== 0 &&
                  botones.map(boton => (
                    <button
                      key={boton.id}
                      type='button'
                      className='hover:cursor-pointer'
                      onClick={() => boton.funcion(registro.fecha, registro.hora)}
                    >
                      <img
                        src={boton.icon}
                        alt="agregado icono"
                        className={`size-7 mx-1 opacity-50`} 
                      />
                    </button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablas;

const Tablas = ({ data, botones }) => {
    return (
      <div>
        <table className='w-full table-auto md:text-center'>
          <thead className='bg-white px-10'>
            <tr>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Hora</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(registro => (
              <tr key={registro.id} className="bg-white">
                <td className="border px-4 py-2">{registro.fecha}</td>
                <td className="border px-4 py-2">{registro.hora}</td>
                <td className="border px-4 py-2 flex justify-center">
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
                          className="size-7 mx-3"
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
  
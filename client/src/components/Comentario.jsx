import React from "react";

export default function Comentario() {
  return (
    <div className="bg-white p-4 md:p-8 md:py-[8rem] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Comentarios de Usuarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComentarioItem
          nombre="Anita Ortega"
          calificacion={5}
          comentario="Tengo la suerte de tener muchos médicos excelentes en mi familia y entre mis amigos. Nunca pensé que necesitaría un médico de atención primaria especial."
          fotoUrl="https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"
        />
        <ComentarioItem
          nombre="Edwin Oliver"
          calificacion={3}
          comentario="Cuando llegué por primera vez a esta consulta, traje mi miedo al dentista."
          fotoUrl="https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
        />
        <ComentarioItem
          nombre="Rene Topson Chelsea Harrington"
          calificacion={4}
          comentario="Tengo la suerte de tener muchos médicos excelentes en mi familia y entre mis amigos."
          fotoUrl="https://www.redaccionmedica.com/images/destacados/las-personas-con-un-riesgo-genetico-bajo-de-tdah-son-mas-afortunadas--2868.jpg"
        />
        <ComentarioItem
          nombre="Emma Johnston"
          calificacion={5}
          comentario="Tengo la suerte de tener muchos médicos excelentes en mi familia y entre mis amigos. Nunca pensé que necesitaba"
          fotoUrl="https://img.freepik.com/foto-gratis/mujer-bastante-joven-feliz-que-presenta-camara-parque-ciudad_1262-19158.jpg"
        />
        <ComentarioItem
          nombre="Juan Pérez"
          calificacion={4}
          comentario="La atención recibida en esta clínica dental fue excelente. El personal fue amable y profesional en todo momento."
          fotoUrl="https://www.redaccionmedica.com/images/destacados/las-personas-con-un-riesgo-genetico-bajo-de-tdah-son-mas-afortunadas--2868.jpg"
        />
        <ComentarioItem
          nombre="María Gómez"
          calificacion={5}
          comentario="Estoy muy contenta con el tratamiento que recibí en esta clínica. Los resultados fueron excelentes y el proceso fue muy cómodo."
          fotoUrl="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg"
        />
      </div>
    </div>
  );
}

function ComentarioItem({ nombre, calificacion, comentario, fotoUrl }) {
  const estrellas = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-xl ${
        index < calificacion ? "text-yellow-500" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ));

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col justify-between">
      <img
        src={fotoUrl}
        alt={nombre}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
        <div className="flex items-center mb-2">{estrellas}</div>
        <p className="text-gray-700">{comentario}</p>
      </div>
    </div>
  );
}

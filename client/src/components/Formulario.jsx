import React, { useState } from "react";

const background =
  "bg-gradient-to-b from-backgroundColorPrimary to-backgroundColorSecondary";
const header = "Una clínica confiable \npara todas sus necesidades dentales";
const subheader =
  "Sonrisas Radiantes, Cuidado Excepcional: \nTu Odontología de Confianza.";
const button = "+51 000-158-189";

export default function Formulario() {
  // Definimos los estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
    // Limpia los campos después del envío
    setNombre("");
    setEmail("");
    setMensaje("");
    // Mostrar mensaje de enviado
    setEnviado(true);
    // Simular reinicio del estado de enviado después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Formulario de Contacto
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="Nombre"
                className="block text-sm font-medium text-gray-100"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-100"
              >
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-[#ffffff] border-[2px] border-white text-black rounded-md hover:bg-blue-900 hover:text-white focus:outline-none focus:bg-blue-900"
            >
              Enviar
            </button>
            {enviado && (
              <p className="mt-4 text-green-600">
                ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
              </p>
            )}
          </form>
        </div>
        <div className="hidden md:block">
          <img
            className="object-cover w-full h-full"
            src="https://revistagacetaudio.es/wp-content/uploads/2017/03/perdida-auditiva-en-odontolgos-GA-1024x627.jpg"
            alt="Imagen de ejemplo"
          />
        </div>
      </div>
    </div>
  );
}

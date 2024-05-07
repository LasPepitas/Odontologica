import React from "react";

const background =
  "bg-gradient-to-b from-backgroundColorPrimary to-backgroundColorSecondary";

const schedule = [
  { day: "Lunes", time: "9 AM – 10 PM" },
  { day: "Martes", time: "Closed" },
  { day: "Miercoles", time: "10 AM – 8 PM" },
  { day: "Jueves", time: "10 AM – 8 PM" },
  { day: "Viernes", time: "9 AM – 8 PM" },
  { day: "Sabado", time: "12 PM – 2 PM" },
  { day: "Domingo", time: "12 PM – 2 PM" },
];

function Horario() {
  return (
    <div style={{ backgroundColor: "#2e3081" }}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen">
        <div className="grid md:grid-cols-12">
          <div className="col-span-6 place-self-center">
            <img
              className="h-44.5"
              src="https://clinicadentalgingiva.es/wp-content/uploads/2020/11/Cu%C3%A1l-es-la-diferencia-entre-un-dentista-y-un-odontologo.jpg"
              alt="Family Dental Health Logo"
            />
            {/* Ensure alt text is descriptive */}
          </div>
          <div className="col-span-6 place-self-center text-white">
            <div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Horario de atencion</h3>
              </div>
              <p>Estamos aquí para brindarle los mejores servicios dentales.</p>
              <div className="mt-6">
                <table className="w-full border-collapse">
                  <tbody>
                    {schedule.map((day, index) => (
                      <tr key={index}>
                        <td className="border px-3 py-2">{day.day}</td>
                        <td className="border px-3 py-2">{day.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horario;

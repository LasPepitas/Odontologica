import { Link } from 'react-router-dom';
const header = 'Una clínica confiable \npara todas sus necesidades dentales';
const subheader =
    'Sonrisas Radiantes, Cuidado Excepcional: \nTu Odontología de Confianza.';

function Hero() {
    return (
        <div
            className="mb-10 pt-16 bg-[#2e3081] w-screen h-screen px-6"
            id="hero"
        >
            <div className="flex justify-center items-center size-full">
                <div className="flex flex-col md:flex-row gap-y-10 relative">
                    <div className="flex-1 place-self-center">
                        <h1 className="text-3xl lg:text-5xl text-white font-black whitespace-pre-line leading-tight">
                            {header}
                        </h1>
                        <h2 className="my-8 text-lg text-white font-normal whitespace-pre-line leading-snug">
                            {subheader}
                        </h2>
                        <Link
                            className="bg-white text-primary font-bold uppercase py-3 px-8 border rounded-2xl hover:bg-primary hover:text-white duration-300 lg:text-[1.3rem]"
                            to="dashboard/turnos"
                        >
                            Agendar Cita
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            className="lg:size-[40rem]"
                            src="https://www.dentaltix.com/es/sites/default/files/odontologo-clinica-dental.jpg"
                            alt="Family Dental Health Logo"
                        />
                        {/* Ensure alt text is descriptive */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;

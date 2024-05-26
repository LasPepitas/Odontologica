import React from 'react';
import { Link } from 'react-router-dom';
const background =
    'bg-gradient-to-b from-backgroundColorPrimary to-backgroundColorSecondary';
const header = 'Una clínica confiable \npara todas sus necesidades dentales';
const subheader =
    'Sonrisas Radiantes, Cuidado Excepcional: \nTu Odontología de Confianza.';

function Hero() {
    return (
        <div style={{ backgroundColor: '#2e3081' }} className="mb-10" id="hero">
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen">
                <div className="grid md:grid-cols-12">
                    <div className="col-span-6 place-self-center">
                        <h1 className="text-5xl text-white font-PTS font-black whitespace-pre-line leading-tight">
                            {header}
                        </h1>
                        <h2 className="my-8 text-lg text-white font-normal whitespace-pre-line leading-snug">
                            {subheader}
                        </h2>
                        <Link
                            className="bg-textColorPrimary bg-white text-primary font-bold uppercase py-3 px-8 border rounded-2xl hover:bg-primary hover:text-white duration-300"
                            to="dashboard/turnos"
                        >
                            Agendar Cita
                        </Link>
                    </div>
                    <div className="col-span-6 place-self-center">
                        <img
                            className="h-44.5"
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

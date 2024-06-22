import { useState } from 'react';

const Index = () => {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [patientAddress, setPatientAddress] = useState('');
    const [patientMedicalHistory, setPatientMedicalHistory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes procesar la información del formulario
        console.log('Formulario enviado');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">
                Historial Clínico del Paciente: Julio Pérez
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientName"
                    >
                        Nombre completo del Paciente:
                    </label>
                    <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(event) => setPatientName(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientAge"
                    >
                        Edad del Paciente:
                    </label>
                    <input
                        type="number"
                        id="patientAge"
                        value={patientAge}
                        onChange={(event) => setPatientAge(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientAddress"
                    >
                        Dirección del Paciente:
                    </label>
                    <input
                        type="text"
                        id="patientAddress"
                        value={patientAddress}
                        onChange={(event) =>
                            setPatientAddress(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Sexo:
                    </label>
                    <select
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Alergias:
                    </label>
                    <select
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Enfermedades:
                    </label>
                    <textarea
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Medicamentos:
                    </label>
                    <textarea
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Tratamientos previos:
                    </label>
                    <textarea
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Intervenciones Quirúrgicas:
                    </label>
                    <textarea
                        id="patientMedicalHistory"
                        value={patientMedicalHistory}
                        onChange={(event) =>
                            setPatientMedicalHistory(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedicalHistory"
                    >
                        Anexos:
                    </label>
                    <div className="relative">
                        <span className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subir imagen o archivo PDF
                        </span>
                        <input
                            type="file"
                            className="h-full absolute left-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-300 duration-300 text-white font-bold py-2 px-4 rounded uppercase"
                    >
                        Subir Historial Clínico
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Index;

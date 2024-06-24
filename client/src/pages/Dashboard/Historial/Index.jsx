import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [patientAddress, setPatientAddress] = useState('');
    const [patientSex, setPatientSex] = useState('');
    const [patientAllergies, setPatientAllergies] = useState('');
    const [patientDiseases, setPatientDiseases] = useState('');
    const [patientMedications, setPatientMedications] = useState('');
    const [patientTreatments, setPatientTreatments] = useState('');
    const [patientSurgeries, setPatientSurgeries] = useState('');
    const [patientAttachments, setPatientAttachments] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes procesar la información del formulario
        console.log('Formulario enviado', {
            patientName,
            patientAge,
            patientAddress,
            patientSex,
            patientAllergies,
            patientDiseases,
            patientMedications,
            patientTreatments,
            patientSurgeries,
            patientAttachments,
        });
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
                        htmlFor="patientSex"
                    >
                        Sexo:
                    </label>
                    <select
                        id="patientSex"
                        value={patientSex}
                        onChange={(event) => setPatientSex(event.target.value)}
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
                        htmlFor="patientAllergies"
                    >
                        Alergias:
                    </label>
                    <select
                        id="patientAllergies"
                        value={patientAllergies}
                        onChange={(event) =>
                            setPatientAllergies(event.target.value)
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
                        htmlFor="patientDiseases"
                    >
                        Enfermedades:
                    </label>
                    <textarea
                        id="patientDiseases"
                        value={patientDiseases}
                        onChange={(event) =>
                            setPatientDiseases(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientMedications"
                    >
                        Medicamentos:
                    </label>
                    <textarea
                        id="patientMedications"
                        value={patientMedications}
                        onChange={(event) =>
                            setPatientMedications(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientTreatments"
                    >
                        Tratamientos previos:
                    </label>
                    <textarea
                        id="patientTreatments"
                        value={patientTreatments}
                        onChange={(event) =>
                            setPatientTreatments(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientSurgeries"
                    >
                        Intervenciones Quirúrgicas:
                    </label>
                    <textarea
                        id="patientSurgeries"
                        value={patientSurgeries}
                        onChange={(event) =>
                            setPatientSurgeries(event.target.value)
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="patientAttachments"
                    >
                        Anexos:
                    </label>
                    <div className="relative">
                        <span className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subir imagen o archivo PDF
                        </span>
                        <input
                            type="file"
                            id="patientAttachments"
                            onChange={(event) =>
                                setPatientAttachments(event.target.files[0])
                            }
                            className="h-full absolute left-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="w-full py-2">
                    <Link
                        to="/dashboard/odontograma"
                        className="p-2 bg-blue-500 hover:bg-blue-300 duration-300 text-white font-bold py-2 px-4 rounded uppercase"
                    >
                        Modificar odontograma del paciente
                    </Link>
                </div>
                <div className="w-full flex justify-center mt-10">
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

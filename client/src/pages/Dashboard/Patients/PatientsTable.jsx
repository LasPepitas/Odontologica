import './patients.css';
const patients = [
    {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        email: 'julio@gmail.com',
        status: 'Reservado',
    },
    {
        id: 2,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'En espera',
    },
    {
        id: 3,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'En espera',
    },
    {
        id: 4,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'Cancelado',
    },
    {
        id: 5,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'Cancelado',
    },
    {
        id: 6,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'En espera',
    },
    {
        id: 7,
        name: 'Jane',
        lastName: 'Doe',
        email: 'random@gmail.com',
        status: 'En espera',
    },
];
const PatientsTable = () => {
    return (
        <section className="w-full h-full px-4 py-3 bg-white rounded-lg">
            <table className="w-full rounded-lg  ">
                <thead className="font-bold text-left text-xl bg-calypso-50 text-calypso-700">
                    <tr className="table-row p-4 ">
                        <th className="px-4 py-2">Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr
                            key={patient.id}
                            className="border-b-[1px] border-gray-300 text-md even:bg-gray-100 hover:bg-gray-200 "
                        >
                            <td
                                className="table-cell py-2 sm:pl-5"
                                data-title="Nombre:"
                            >
                                {patient.name}
                            </td>
                            <td
                                className="table-cell py-2"
                                data-title="Apellido:"
                            >
                                {patient.lastName}
                            </td>
                            <td className="table-cell py-2" data-title="Email:">
                                {patient.email}
                            </td>
                            <td
                                data-title="Estado:"
                                className={` font-bold table-cell py-2
                                ${
                                    patient.status === 'Reservado' &&
                                    'text-green-600'
                                }
                                ${
                                    patient.status === 'En espera' &&
                                    'text-yellow-500'
                                }
                                ${
                                    patient.status === 'Cancelado' &&
                                    'text-red-600'
                                }
                            `}
                            >
                                {patient.status}
                            </td>
                            <td className="font-bold gap-x-2 table-cell py-2">
                                <button className="bg-green-400 text-white px-2 py-1 rounded-md">
                                    Editar
                                </button>
                                <button className="bg-red-400 text-white px-2 py-1 rounded-md ml-3">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default PatientsTable;

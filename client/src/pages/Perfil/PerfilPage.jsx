import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { EditIcon } from '../../assets/icons';
import { useEffect, useState } from 'react';
import consultasJson from '../Consultas/consultas.json';
import { ProfilePhoto } from '../../assets/images';
import './waves.css';

const PerfilPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    const [consultasDetalles, SetConsultasDetalles] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                let pendientes = 0,
                    pasadas = 0;
                consultasJson.consultas.map((consulta) =>
                    consulta.estado === 'pendiente' ? pendientes++ : pasadas++,
                );
                SetConsultasDetalles([pendientes, pasadas]);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div className="md:flex w-full h-[90%] justify-center items-center gap-6">
            <section className="md:flex flex-col justify-center items-center md:w-[40%] md:h-[95%] md:mb-10 md:border md:border-solid md:p-4 rounded-lg md:shadow-xl">
                <div className="md:flex w-full h-[30%] box bg-[#3a38ca]"></div>
                <div className="flex w-full md:h-[60%] h-[10%] justify-center my-2">
                    <img
                        src={ProfilePhoto}
                        alt="foto de perfil"
                        className="w-[55%] md:w-[70%] h-full bg-white rounded-full md:relative md:-top-[20%]"
                    />
                </div>
                <p className="hidden md:flex md:relative md:-top-[10%] text-2xl">
                    Hola {user.name} !!
                </p>
                <div className="w-full h-[10%] flex flex-row  justify-center items-center md:hover:cursor-pointer">
                    <p className="text-center">Editar perfil</p>
                    <img src={EditIcon} alt="" className="size-7 mx-3" />
                </div>
            </section>
            <section className="md:w-[60%] md:px-10 md:py-20 md:flex flex-col justify-center items-center">
                <div className="md:border md:p-4 md:w-[70%] md:rounded-lg md:shadow-xl">
                    <p className="hidden md:block">Informacion Personal</p>
                    <div className="md:block md:border-solid md:border md:border-[2px]"></div>
                    <div className="flex flex-col my-4 mx-4">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            className="w-[80%] md:w-[40%] text-black rounded-lg px-3 border-solid border"
                            placeholder={user.name}
                            disabled
                        />
                    </div>
                    <div className="flex flex-col my-4 mx-4">
                        <label htmlFor="nombre">Email:</label>
                        <input
                            type="text"
                            id="nombre"
                            className="w-[80%] md:w-[40%] rounded-lg px-3 border-solid border"
                            placeholder={user.name}
                            disabled
                        />
                    </div>
                </div>
                <div className="md:border md:p-4 md:w-[70%] md:mt-7 md:rounded-lg md:shadow-xl">
                    <p className="hidden md:block">Informacion Medica</p>
                    <div className="md:block md:border-solid md:border md:border-[2px]"></div>
                    <div className="flex flex-col my-4 mx-4">
                        <label>Consultas:</label>
                        <ul className="mx-10">
                            <li className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-red-600 rounded-full mr-2"></div>
                                Pendientes{' '}
                            </li>
                            <li className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-green-600 rounded-full mr-2"></div>
                                Pasadas
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-4 mx-4">
                        <label>Pagos:</label>
                        <ul className="mx-10">
                            <li className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-red-600 rounded-full mr-2"></div>
                                Pendientes{' '}
                            </li>
                            <li className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-green-600 rounded-full mr-2"></div>
                                Pasadas
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-4 mx-4">
                        <label htmlFor="historial">Historial Clínico</label>
                        <a
                            href="ruta/al/archivo/historial.pdf"
                            className="md:w-[25%] mx-10 bg-green-500 text-center text-white rounded-lg mt-2"
                            download
                        >
                            Descargar
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PerfilPage;

import { Link } from 'react-router-dom';

export default function Header({ data }) {
    return (
        <header className="bg-white fixed w-full h-16 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        {/* URL a con imagen */}
                        <img
                            className="h-8 lg:h-12"
                            src="https://seeklogo.com/images/F/family-dental-healt-logo-CF68B43664-seeklogo.com.png"
                            alt="Family Dental Health Logo"
                        />
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-lg">
                                <li>
                                    <a
                                        href="#hero"
                                        className="text-black transition hover:text-[#0c8fae]"
                                    >
                                        {' '}
                                        Inicio{' '}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#service"
                                        className="text-black transition hover:text-[#0c8fae]"
                                    >
                                        Service
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#horario"
                                        className="text-black transition hover:text-[#0c8fae]"
                                    >
                                        Horario
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#comentario"
                                        className="text-black transition hover:text-[#0c8fae]"
                                    >
                                        Comentario
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#formulario"
                                        className="text-black transition hover:text-[#0c8fae]"
                                    >
                                        Formulario
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="rounded-md font-bold bg-[#636ff1] px-5 py-2.5 text-sm text-white shadow"
                                to="/login"
                            >
                                Iniciar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

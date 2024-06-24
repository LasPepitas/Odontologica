const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Página no encontrada
            </h2>
            <p className="text-gray-600 mb-8">
                Lo sentimos, pero la página que estás buscando no existe. Puede
                que haya sido movida o eliminada.
            </p>
            <div className="flex justify-center">
                <img
                    src="https://media.tenor.com/fKIG2kiLVPgAAAAM/this-is-fine-its-fine.gif"
                    alt="Dental illustration"
                    className="w-48 h-40 mb-8 aspect-video"
                />
            </div>
            <a
                href="/"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Volver a la página principal
            </a>
        </div>
    );
};

export default NotFoundPage;

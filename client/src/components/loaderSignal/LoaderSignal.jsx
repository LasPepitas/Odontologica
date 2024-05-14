import './loader.css';
const LoaderSignal = () => {
    return (
        <div className="bg-[#3a38ca] fixed h-screen w-screen flex justify-center items-center">
            <span className="loader text-white">Cargando</span>
        </div>
    );
};

export default LoaderSignal;

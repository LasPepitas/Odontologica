import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FondoCanvas } from '../../../assets/images';

function Odontograma() {
    const [color, setColor] = useState('red');
    const [iconColor, setIconColor] = useState('#1C274C');
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const canvasRef = useRef(null);
    const [isErasing, setIsErasing] = useState(false);
    const [eraseColor, setEraseColor] = useState('#FFFFFF00'); // Color blanco para simular borrado
    const isDrawingRef = useRef(false);
    const lastPosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const olData = localStorage.getItem('odontograma');
        if (olData) {
            const image = new Image();
            image.src = olData;
            image.onload = () => {
                context.drawImage(image, 0, 0);
            };
        }
    }, []);

    const handleOdont = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const drawingData = canvas.toDataURL();

        // Aquí puedes enviar drawingData a tu backend para guardar
        localStorage.setItem('odontograma', drawingData);
        toast.success('Actualizado con éxito');
        navigate('/dashboard/historial');
    };

    const handleColor = (newColor) => {
        setColor(newColor);
    };

    const handleValue = (event) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const toggleEraser = () => {
        setIsErasing(!isErasing);
        if (isErasing) {
            setColor('red'); // Vuelve al color de dibujo principal
            setIconColor('#1C274C');
        } else {
            setIconColor('blue');
            setEraseColor('#FFFFFF'); // Cambia al color de borrado (blanco) AEA WANO , PERO TIENE QUE SER TRANSPARENTE PE :V
        }
    };

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
        };
    };

    const startDrawing = (evt) => {
        isDrawingRef.current = true;
        lastPosRef.current = getMousePos(canvasRef.current, evt);
    };

    const stopDrawing = () => {
        isDrawingRef.current = false;
    };

    const draw = (evt) => {
        if (!isDrawingRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const mousePos = getMousePos(canvas, evt);

        if (isErasing) {
            context.clearRect(mousePos.x, mousePos.y, value, value);
            return;
        }

        context.beginPath();
        context.moveTo(lastPosRef.current.x, lastPosRef.current.y);
        context.lineTo(mousePos.x, mousePos.y);
        context.strokeStyle = isErasing ? eraseColor : color;
        context.lineWidth = value;
        context.stroke();

        lastPosRef.current = mousePos;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Odontograma</h1>
            <div className="flex items-center justify-center p-15 gap-10">
                <div className="flex flex-col gap-5 items-center">
                    <canvas
                        ref={canvasRef}
                        width={650}
                        height={500}
                        onMouseDown={startDrawing}
                        onMouseUp={stopDrawing}
                        onMouseOut={stopDrawing}
                        onMouseMove={draw}
                        style={{
                            border: '1px solid #000',
                            backgroundImage: `url(/odontograma.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <input
                        type="range"
                        className="w-60"
                        min={0}
                        max={20}
                        value={value}
                        onChange={handleValue}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <button
                        className={`h-16 w-16 rounded-full bg-red-500 border-solid border-green-100 border-[10px] focus:border-green-300`}
                        onClick={() => handleColor('red')}
                    />
                    <button
                        className={`h-16 w-16 rounded-full bg-blue-500 border-solid border-green-100 border-[10px] focus:border-green-300`}
                        onClick={() => handleColor('blue')}
                    />
                    <button
                        className={`h-16 w-16 rounded-full bg-yellow-300 border-solid border-green-100 border-[10px] focus:border-green-300`}
                        onClick={() => handleColor('yellow')}
                    />
                    <button
                        className={`h-16 w-16 rounded-full`}
                        onClick={toggleEraser}
                    >
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.67004 11.6064L8.20037 12.1367L7.67004 11.6064ZM6 13.9682H5.25H6ZM10.0318 18V18.75V18ZM11.6064 7.67004L11.076 7.13971L11.6064 7.67004ZM12.6506 16.073C12.9435 16.3659 13.4183 16.3659 13.7112 16.073C14.0041 15.7801 
              14.0041 15.3053 13.7112 15.0124L12.6506 16.073ZM8.98764 10.2888C8.69474 9.99588 8.21987 9.99588 7.92698 10.2888C7.63408 10.5817 7.63408 11.0565 7.92698 11.3494L8.98764 10.2888ZM15.7996 11.8633L11.8633 15.7996L12.924 16.8603L16.8603 12.924L15.7996 11.8633ZM8.20037 12.1367L12.1367 8.20037L11.076 7.13971L7.13971 11.076L8.20037 12.1367ZM8.20037 15.7996C7.6287 15.228 7.25442 14.8514 7.01378 14.536C6.78634 14.2379 6.75 14.0841 6.75 13.9682H5.25C5.25 14.544 5.492 15.0144 5.82124 15.4459C6.13728 15.8601 6.59802 16.3186 7.13971 16.8603L8.20037 15.7996ZM7.13971 11.076C6.59802 11.6177 6.13728 12.0762 5.82124 12.4904C5.492 12.922 5.25 13.3924 5.25 13.9682H6.75C6.75 13.8522 6.78634 13.6984 7.01378 13.4003C7.25442 13.0849 7.6287 12.7084 8.20037 12.1367L7.13971 11.076ZM11.8633 15.7996C11.2916 16.3713 10.9151 16.7456 10.5997 16.9862C10.3016 17.2137 10.1478 17.25 10.0318 17.25V18.75C10.6076 18.75 11.078 18.508 11.5096 18.1788C11.9238 17.8627 12.3823 17.402 12.924 16.8603L11.8633 15.7996ZM7.13971 16.8603C7.6814 17.402 8.13989 17.8627 8.55411 18.1788C8.98563 18.508 9.45604 18.75 10.0318 18.75V17.25C9.91588 17.25 9.76207 17.2137 9.46398 16.9862C9.14858 16.7456 8.77204 16.3713 8.20037 15.7996L7.13971 16.8603ZM15.7996 8.20037C16.3713 8.77204 16.7456 9.14858 16.9862 9.46398C17.2137 9.76207 17.25 9.91588 17.25 10.0318H18.75C18.75 9.45604 18.508 8.98563 18.1788 8.55411C17.8627 8.13989 17.402 7.6814 16.8603 7.13971L15.7996 8.20037ZM16.8603 12.924C17.402 12.3823 17.8627 11.9238 18.1788 11.5096C18.508 11.078 18.75 10.6076 18.75 10.0318H17.25C17.25 10.1478 17.2137 10.3016 16.9862 10.5997C16.7456 10.9151 16.3713 11.2916 15.7996 11.8633L16.8603 12.924ZM16.8603 7.13971C16.3186 6.59802 15.8601 6.13728 15.4459 5.82124C15.0144 5.492 14.544 5.25 13.9682 5.25V6.75C14.0841 6.75 14.2379 6.78634 14.536 7.01378C14.8514 7.25442 15.228 7.6287 15.7996 8.20037L16.8603 7.13971ZM12.1367 8.20037C12.7084 7.6287 13.0849 7.25442 13.4003 7.01378C13.6984 6.78634 13.8522 6.75 13.9682 6.75V5.25C13.3924 5.25 12.922 5.492 12.4904 5.82124C12.0762 6.13728 11.6177 6.59802 11.076 7.13971L12.1367 8.20037ZM13.7112 15.0124L8.98764 10.2888L7.92698 11.3494L12.6506 16.073L13.7112 15.0124Z"
                                fill={iconColor}
                            />
                            <path
                                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                stroke={iconColor}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <button
                        className="h-16 w-16 rounded-full border-solid border-black border-[5px] focus:border-red-500 flex items-center justify-center"
                        onClick={handleClear}
                    >
                        <svg
                            width={45}
                            height={45}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 12V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14 12V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 7H20"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <button
                className="bg-green-500 hover:bg-green-300 duration-300 text-white font-bold py-2 px-4 rounded uppercase"
                onClick={handleOdont}
            >
                Actualizar
            </button>
        </div>
    );
}

export default Odontograma;

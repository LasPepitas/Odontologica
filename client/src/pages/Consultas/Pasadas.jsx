import { useState, useEffect } from "react";
import { DetailsIcon } from "../../assets/icons"
import Tablas from "./Tablas"

/* eslint-disable react/prop-types */
function Confirmada({ isLoading, data }) {
    const [confirmada, setConfirmada] = useState([]);
    
    useEffect(() => {
        const addExtraFields = (filterData) => {
            return filterData.map(item => {
                const { date } = item;
                const [fecha, hora] = date.split('T');
                const horaSinMilisegundos = hora.split('.')[0];
                return {
                    ...item,
                    fecha,
                    hora: horaSinMilisegundos
                };
            });
        };

        const consultasPasadas = data.filter(item => {
            const { date } = item;
            const consultaDate = new Date(date);
            const now = new Date();
            return consultaDate < now;
        });

        setConfirmada(addExtraFields(consultasPasadas));
    }, []);

    const handleFilterButton = () =>{
        return null
    }

    return (
        <div className="w-full">
            {!isLoading && confirmada.length !== 0 && (
                <Tablas
                    data={confirmada}
                    botones={[
                        {
                            id: 1,
                            icon: DetailsIcon,
                            funcion: (() => null),
                        },
                    ]}
                />
            )}
        </div>
    )
}

export default Confirmada

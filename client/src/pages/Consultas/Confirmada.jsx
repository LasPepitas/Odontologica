import { useEffect, useState } from "react";
import { DetailsIcon } from "../../assets/icons"
import Tablas from "./Tablas"

/* eslint-disable react/prop-types */
function Confirmada({isLoading, data}) {
    const [confirmada, setConfirmada] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const filteredData = data.filter(filtrado => filtrado.status === "confirmed");
        setFilterData(filteredData);
    }, []);

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

        setConfirmada(addExtraFields(filterData));
    }, [filterData]);

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
    );
}

export default Confirmada

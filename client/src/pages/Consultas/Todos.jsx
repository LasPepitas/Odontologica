/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { DetailsIcon } from "../../assets/icons";
import Tablas from "./Tablas";

function Todos({ isLoading, data }) {
    const [confirmada, setConfirmada] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(data);
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

export default Todos;

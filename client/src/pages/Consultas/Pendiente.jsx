/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { DeleteIcon, EditIcon } from "../../assets/icons";
import Tablas from "./Tablas";

function Pendiente({ isLoading, data }) {
    const [confirmada, setConfirmada] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const filteredData = data.filter(filtrado => filtrado.status === "pending");
        setFilterData(filteredData);
    }, []);

    useEffect(() => {
        const addExtraFields = (filterData) => {
            return filterData.map(item => {
                const { date } = item;
                const [fecha, hora] = date.split(' ');
                return {
                    ...item,
                    fecha,
                    hora: hora
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
                            icon: EditIcon,
                            funcion: (() => null),
                        },
                        {
                            id: 2,
                            icon: DeleteIcon,
                            funcion: (() => null),
                        },
                    ]}
                />
            )}
        </div>
    );
}

export default Pendiente;

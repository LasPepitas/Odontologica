/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { DetailsIcon } from "../../assets/icons";
import Tablas from "./Tablas";

function Todos({ isLoading, data }) {
    const [confirmada, setConfirmada] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectPacient, setSelectPatient] = useState(null);


    useEffect(() => {
        setFilterData(data);
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
                            icon: DetailsIcon,
                            funcion: (() => {console.log("todos")}),
                        },
                    ]}
                />
            )}
        </div>
    );
}

export default Todos;

import React, { useState } from 'react';
import { Diente } from '../../../assets/images';

const Tooth = ({ toothNumber, status, onStatusChange }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleClick = () => {
    const newStatus = currentStatus === 'healthy' ? 'cavity' : 'healthy';
    setCurrentStatus(newStatus);
    onStatusChange(toothNumber, newStatus);
  };

  return (
    <div
      className={`w-19 h-19 border flex items-center justify-center m-1 cursor-pointer flex-col ${
        currentStatus === 'healthy' ? 'bg-green-200' : 'bg-red-200'
      }`}
      onClick={handleClick}
    >
      {toothNumber}
      <img
            src={Diente}
            alt="Diente"
            className="size-16"
        />
    </div>
  );
};

export default Tooth;

// src/components/Odontogram.js
import React, { useState } from 'react';
import Tooth from './Tooth';

const initialTeethStatus = Array.from({ length: 32 }, () => 'healthy');

const Odontogram = () => {
  const [teethStatus, setTeethStatus] = useState(initialTeethStatus);

  const handleStatusChange = (toothNumber, newStatus) => {
    const newTeethStatus = [...teethStatus];
    newTeethStatus[toothNumber - 1] = newStatus;
    setTeethStatus(newTeethStatus);
  };

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="flex flex-wrap w-full">
        {teethStatus.slice(0, 16).map((status, index) => (
          <Tooth
            key={index}
            toothNumber={index + 1}
            status={status}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
      <div className="flex flex-wrap w-full mt-4">
        {teethStatus.slice(16).map((status, index) => (
          <Tooth
            key={index + 16}
            toothNumber={index + 17}
            status={status}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Odontogram;

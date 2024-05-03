import React, { useState } from 'react';
import { MenuIcon } from '../assets/icons';
import Options from './Options';

const HeaderDashboard = ({showMenu}) => {
    
    return (
        <div className="w-full h-[10%] bg-[#184D61] flex items-center justify-between px-4 relative">
            {/* Botón del menú */}
            <button className='md:hidden' onClick={showMenu}>
                <img
                    src={MenuIcon}
                    alt="menu icono"
                    className="size-7 mx-3"
                />
            </button>
            <div className='w-60 h-10 bg-[#D9D9D9] '>
                LOGO DE LA EMPRESA
            </div>
            {/* Botón de salida */}
            <div className="relative">
                <button className="bg-[#11728D] text-white my-2 px-4 py-2 rounded-lg">Salir</button>
            </div>
        </div>
    );
}

export default HeaderDashboard;

import React from 'react';

const HeaderDashboard = () => {
    return (
        <div className="w-full h-[10%] bg-[#184D61] flex items-center justify-between px-4">
            <div className='w-60 h-10 bg-[#D9D9D9] '>
                LOGO DE LA EMPRESA
            </div>
            <div>
                <button className="bg-[#11728D] text-white my-2 px-4 py-2 rounded-lg">Salir</button>
            </div>
        </div>
    );
}

export default HeaderDashboard;

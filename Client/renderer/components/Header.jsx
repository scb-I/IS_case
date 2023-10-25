import React, { useEffect, useState } from 'react';
import { BsXLg, BsDashLg } from 'react-icons/bs';
import { BiSquareRounded } from 'react-icons/bi';

function Header({ onPlayBackClick, onBuildingPlanClick }) {
    return (
        <React.Fragment>
            <nav className='drag flex flex-row justify-start items-center w-full h-[50px] bg-[#3A3F43]'>
                <div className='w-[260px] h-full justify-start items-start bg-[#3A3F43]'>
                    <h1 className='text-[32px] text-white ml-[10px] mt-[5px] mb-[6px]'>
                        Team name
                    </h1>
                </div>
                <div className='no-drag menu-select w-[307px] h-full bg-[#3A3F43] flex flex-row justify-between items-center'>
                    <button
                        onClick={onPlayBackClick}
                        className='w-auto h-full p-3 text-white text-[20px] ml-[13px] hover:bg-[#91d1ff] transition-all duration-300'
                    >
                        PlayBack
                    </button>
                    <button
                        onClick={onBuildingPlanClick}
                        className='w-auto h-full p-3 text-white text-[20px] mr-[13px] hover:bg-[#91d1ff] transition-all duration-300'
                    >
                        Building plan
                    </button>
                </div>
                <div className='w-[180px] flex flex-row h-full justify-start items-start ml-[1173px]'>
                    <button
                        className='no-drag minimize-win w-[60px] h-full bg-[#3A3F43] flex flex-auto justify-center items-center hover:bg-[#91d1ff] transition-all duration-300'
                        onClick={() => {
                            window.ipc.send('minimize-win');
                        }}
                    >
                        <BsDashLg size={25} className='text-white' />
                    </button>
                    <button
                        className='no-drag maximize-win w-[60px] h-full bg-[#3A3F43] flex flex-auto justify-center items-center hover:bg-[#91d1ff] transition-all duration-300'
                        onClick={() => {
                            window.ipc.send('maximize-win');
                        }}
                    >
                        <BiSquareRounded size={25} className='text-white' />
                    </button>
                    <button
                        className='no-drag close-win w-[60px] h-full bg-[#3A3F43] flex flex-auto justify-center items-center hover:bg-[#91d1ff] transition-all duration-300'
                        onClick={() => {
                            window.ipc.send('close-win');
                        }}
                    >
                        <BsXLg size={25} className='text-white' />
                    </button>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;

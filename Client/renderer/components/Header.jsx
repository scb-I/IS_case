import React from 'react';
import { BsXLg, BsDashLg } from 'react-icons/bs';
import { BiSquareRounded } from 'react-icons/bi';

function Header() {
    return (
        <React.Fragment>
            <nav className='drag flex flex-row relative items-center w-full h-[50px] bg-[#3A3F43]'>
                <div className='flex items-center px-[10px] w-max h-full text-[32px] text-white'>
                    DefSet
                </div>
                <div className='flex absolute items-center flex-row right-0 w-auto h-full '>
                    <button
                        className='no-drag minimize-win flex justify-center items-center w-[60px] h-full transition-all hover:bg-[#aaaaaa] duration-300'
                        onClick={() => {
                            window.ipc.send('minimize-win');
                        }}
                    >
                        <BsDashLg size={25} className='text-white' />
                    </button>
                    <button
                        className='no-drag maximize-win flex justify-center items-center w-[60px] h-full transition-all hover:bg-[#aaaaaa] duration-300'
                        onClick={() => {
                            window.ipc.send('maximize-win');
                        }}
                    >
                        <BiSquareRounded size={25} className='text-white' />
                    </button>
                    <button
                        className='no-drag close-win flex justify-center items-center w-[60px] h-full transition-all hover:bg-[#b85b5b] duration-300'
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

import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

export default function AuthPage() {
    return (
        <React.Fragment>
            <Header />
            <main className='main-table'>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='flex flex-col items-center w-[600px] h-[600px] bg-[#2B3033] rounded-[35px]'>
                        <label className='text-[40px] text-white mt-[55px]'>
                            Authorization
                        </label>
                        <form>
                            <div className='flex justify-center flex-col w-auto mt-[60px] h-auto items-center space-y-[35px]'>
                                <input
                                    type='text'
                                    placeholder='Login'
                                    className='input'
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='input'
                                />
                                <input
                                    type='password'
                                    placeholder='Key'
                                    className='input'
                                />
                            </div>
                        </form>
                        <Link href='/home'>
                            <button className='mt-[40px] w-[220px] h-[60px] text-center text-white items-center justify-center bg-[#3A3F43] rounded-[15px] text-[25px] transition-all hover:bg-[#888888] duration-300'>
                                Begin
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

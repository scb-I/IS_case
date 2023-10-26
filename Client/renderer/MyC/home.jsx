import React, { useState } from 'react';
import Header from '../components/Header';
import { BsBezier, BsCameraVideo } from 'react-icons/bs';
import MediaPlayer from '../components/mediaplayer';
import Map from '../components/map';

function Home() {
    const [showMediaPlayer, setShowMediaPlayer] = useState(true);

    const handleBuildingPlanClick = () => {
        setShowMediaPlayer(!showMediaPlayer);
    };

    return (
        <React.Fragment>
            <Header />
            <main className='bg-[#2B3033] flex flex-row w-full h-[calc(100%_-_50px)] relative'>
                <div className='w-[260px] h-full bg-[#61b4e8] flex flex-col'>
                    <div className='cam-container w-[260px] h-auto bg-[#2B3033] flex flex-col'>
                        <div className='w-[230px] h-[25px] mx-[15px] mt-[15px] flex flex-row items-center justify-start space-x-[10px]'>
                            <BsBezier size={25} className='text-white' />
                            <h1 className='text-[15px] text-white'>
                                Default Group
                            </h1>
                        </div>
                        <div className='w-[215px] h-[25px] ml-[30px] my-[10px] mr-[15px] flex flex-row items-center justify-start space-x-[10px]'>
                            <BsCameraVideo size={25} className='text-white' />
                            <h1 className='text-[15px] text-white'>
                                Camera - 1
                            </h1>
                        </div>
                        <div className='w-[215px] h-[25px] ml-[30px] my-[10px] mr-[15px] flex flex-row items-center justify-start space-x-[10px]'>
                            <BsCameraVideo size={25} className='text-white' />
                            <h1 className='text-[15px] text-white'>
                                Camera - 2
                            </h1>
                        </div>
                        <div className='w-[215px] h-[25px] ml-[30px] my-[10px] mr-[15px] flex flex-row items-center justify-start space-x-[10px]'>
                            <BsCameraVideo size={25} className='text-white' />
                            <h1 className='text-[15px] text-white'>
                                Camera - 3
                            </h1>
                        </div>
                    </div>

                    <div className='buttons-container w-[210px] h-[40px] bg-[#0FBDF8] flex flex-row rounded-[10px] mx-[25px] mb-[25px] absolute bottom-0'>
                        <button
                            onClick={() =>
                                document
                                    .getElementById('settings_modal')
                                    .showModal()
                            }
                            className='w-[125px] h-[40px] flex flex-auto items-center justify-center rounded-l-[10px] hover:bg-[#91d1ff] transition-all duration-300'
                        >
                            <h1 className='text-white text-[20px]'>Settings</h1>
                        </button>
                        <button
                            onClick={handleBuildingPlanClick}
                            className='w-[85px] h-[40px] flex flex-auto items-center justify-center rounded-r-[10px] hover:bg-[#91d1ff] transition-all duration-300'
                        >
                            <h1 className='text-white text-[20px]'>Map</h1>
                        </button>
                    </div>
                </div>
                <div className='main-container mt-[3px] w-[1660px] h-[1027px] bg-[#3A3F43] flex flex-col items-center justify-center'>
                    <dialog id='settings_modal' className='modal'>
                        <div className='modal-box'>
                            <h3 className='font-bold text-lg'>Hello!</h3>
                            <p className='py-4'>
                                Press ESC key or click the button below to close
                            </p>
                            <div className='modal-action'>
                                <form method='dialog'>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className='btn'>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {showMediaPlayer ? <MediaPlayer /> : <Map />}
                </div>
            </main>
        </React.Fragment>
    );
}

export default Home;

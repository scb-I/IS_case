import React, { useState } from 'react';
import Header from '../components/Header';
import { BsBezier, BsCameraVideo } from 'react-icons/bs';
import MediaPlayer from '../components/mediaplayer';
import Map from '../components/map';

export default function Home() {
    const [showMediaPlayer, setShowMediaPlayer] = useState(true);

    const handleBuildingPlanClick = () => {
        setShowMediaPlayer(!showMediaPlayer);
    };

    return (
        <React.Fragment>
            <Header />
            <main className='main-table'>
                <div className='flex flex-row w-full h-full'>
                    <div className='relative flex flex-col w-[260px] h-full bg-[#2B3033]'>
                        <div className='flex flex-col p-[15px] space-y-[10px] w-full h-auto'>
                            <div className='flex flex-row items-center space-x-[10px] w-auto h-[25px] text-[15px] text-white'>
                                <BsBezier size={25} className='fill-white' />
                                <h1>Default Group</h1>
                            </div>

                            <button className='button-cam'>
                                <BsCameraVideo
                                    size={25}
                                    className='fill-white'
                                />
                                <h2>Camera - 1</h2>
                            </button>

                            <button className='button-cam'>
                                <BsCameraVideo
                                    size={25}
                                    className='fill-white'
                                />
                                <h3>Camera - 2</h3>
                            </button>

                            <button className='button-cam'>
                                <BsCameraVideo
                                    size={25}
                                    className='fill-white'
                                />
                                <h4>Camera - 3</h4>
                            </button>

                            <button className='button-cam'>
                                <BsCameraVideo
                                    size={25}
                                    className='fill-white'
                                />
                                <h5>Camera - 4</h5>
                            </button>
                        </div>

                        <div className='absolute flex flex-row bottom-0 px-[25px] pb-[25px] w-full h-auto'>
                            <button className='flex justify-center items-center w-[125px] h-[40px] rounded-l-[10px] text-white bg-[#5d89c3] hover:bg-[#4e73a3] duration-300'>
                                Settings
                            </button>
                            <button
                                onClick={handleBuildingPlanClick}
                                className='flex justify-center items-center w-[85px] h-[40px] rounded-r-[10px] text-white bg-[#5d89c3] hover:bg-[#4e73a3] duration-300'
                            >
                                Map
                            </button>
                        </div>
                    </div>

                    <div
                        className='flex justify-center items-center p-[50px] h-full'
                        style={{ width: 'calc(100% - 260px)' }}
                    >
                        <div className='w-full h-full rounded-[30px] bg-[#2B3033]'>
                            {showMediaPlayer ? <MediaPlayer /> : <Map />}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

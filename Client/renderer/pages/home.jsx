import React, { useState } from 'react';
import Header from '../components/Header';
import { BsBezier, BsCameraVideo, BsAspectRatio } from 'react-icons/bs';
import MediaPlayer from '../components/mediaplayer';
import Map from '../components/map';

export default function Home() {
    const [showMediaPlayer, setShowMediaPlayer] = useState(true);
    const [currentSrc, setCurrentSrc] = useState(
        'https://cdn.universmotri.ru/ipcam/cam34.stream_576p/playlist.m3u8'
    ); // Состояние для хранения текущего src

    const handleBuildingPlanClick = () => {
        setShowMediaPlayer(!showMediaPlayer);
    };

    const changeSrcClick = (newSrc) => {
        console.log('Changing the source to', newSrc);
        setCurrentSrc(newSrc); // Обновляем src при нажатии на кнопку
        setShowMediaPlayer(true);
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

                            <button
                                onClick={() =>
                                    changeSrcClick(
                                        'https://sochi.camera:8443/cam_311/tracks-v1a1/mono.m3u8?token=188d4afbbc1dc7cff3dfc5232209ef1013857eb6-3d1d928612f6e0d30e3fc06dffdb35f0-1698378622-1698349822'
                                    )
                                }
                                className='button-cam'
                            >
                                <BsCameraVideo
                                    size={25}
                                    className='fill-white'
                                />
                                <h2>Camera - 1</h2>
                            </button>

                            <button
                                onClick={() =>
                                    changeSrcClick(
                                        'https://cdn.universmotri.ru/ipcam/cam34.stream_576p/playlist.m3u8'
                                    )
                                }
                                className='button-cam'
                            >
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
                            <button
                                onClick={() =>
                                    document
                                        .getElementById('settings_modal')
                                        .showModal()
                                }
                                className='flex justify-center items-center w-[125px] h-[40px] rounded-l-[10px] text-white bg-[#5d89c3] hover:bg-[#4e73a3] duration-300'
                            >
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
                        <div className='flex justify-center items-center p-[40px] w-full h-full rounded-[30px] bg-[#2B3033]'>
                            <dialog id='settings_modal' className='modal'>
                                <div className='modal-box p-0 max-w-none max-h-none w-[600px] h-[250px] flex flex-col items-center justify-center space-y-[35px]'>
                                    <div className='w-full px-[50px] h-[60px] flex flex-row justify-center items-center space-x-[30px]'>
                                        <BsCameraVideo
                                            size={60}
                                            className='fill-white'
                                        />
                                        <input
                                            type='text'
                                            className='input focus:outline-none w-[410px] h-[60px] text-[25px]'
                                            placeholder='Enter camera name'
                                        />
                                    </div>
                                    <div className='w-full px-[50px] h-[60px] flex flex-row justify-center items-center space-x-[30px]'>
                                        <BsAspectRatio
                                            size={60}
                                            className='fill-white'
                                        />
                                        <input
                                            type='text'
                                            className='input focus:outline-none w-[410px] h-[60px] text-[25px]'
                                            placeholder='Enter sector'
                                        />
                                    </div>
                                </div>
                            </dialog>
                            {showMediaPlayer ? (
                                <MediaPlayer currentSrc={currentSrc} />
                            ) : (
                                <Map />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

export default function MyMediaPlayer() {
    return (
        <div className='m-[40px]'>
            <MediaPlayer
                title='Sprite Fight'
                src='https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4'
            >
                <MediaProvider />
                <DefaultVideoLayout
                    thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
                    icons={defaultLayoutIcons}
                />
            </MediaPlayer>
        </div>
    );
}

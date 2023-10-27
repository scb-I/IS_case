import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

export default function MyMediaPlayer(props) {
    return (
        <div className='w-full h-full flex justify-center rounded-[10px] overflow-hidden'>
            <MediaPlayer src={props.currentSrc} autoplay='true'>
                <MediaProvider />
                <DefaultVideoLayout
                    thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
                    icons={defaultLayoutIcons}
                />
            </MediaPlayer>
        </div>
    );
}

import Image from 'next/image';
import MapImage from '../public/images/map.svg';

export default function Map() {
    return <Image src={MapImage} alt='Map' width={1560} height={930} />;
}

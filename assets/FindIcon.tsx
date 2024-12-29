import Svg, { Path } from 'react-native-svg';

interface Props {
    color: string;
    width: number;
    height: number;
}

export default function FindIcon({ color, width, height }: Props) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M15.716,4.354a8.031,8.031,0,1,0-2.7,13.138l3.58,3.581A3.164,3.164,0,0,0,21.073,16.6l-3.58-3.58A8.046,8.046,0,0,0,15.716,4.354ZM10.034,16.069A6.033,6.033,0,1,1,14.3,14.3,6,6,0,0,1,10.034,16.069Zm9.625,1.943a1.165,1.165,0,0,1-1.647,1.647l-3.186-3.186a8.214,8.214,0,0,0,.89-.757,8.214,8.214,0,0,0,.757-.89Z"
                fill={color}
            />
        </Svg>
    )
}

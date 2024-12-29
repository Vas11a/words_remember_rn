import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

interface Props {
    color: string;
    width: number;
    height: number;
}

export default function DataBaseIcon({ color, width, height }: Props) {
    return (
        <Svg
        // @ts-ignore
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            width={width}
            height={height}
        >
            <Ellipse
                cx="16"
                cy="8"
                rx="10"
                ry="5"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <Path
                d="M6,8v8c0,2.8,4.5,5,10,5c5.5,0,10-2.2,10-5V8"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <Path
                d="M6,16v8c0,2.8,4.5,5,10,5c5.5,0,10-2.2,10-5v-8"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </Svg>
    );
}

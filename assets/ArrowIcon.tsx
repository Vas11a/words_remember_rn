import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    color: string;
    width: number;
    height: number;
}

export default function ArrowIcon({ color, width, height }: Props) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M12 5V19M12 5L6 11M12 5L18 11"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

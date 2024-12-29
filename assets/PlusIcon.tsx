import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function PlusIcon() {
    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M4 12H20M12 4V20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  color: string;
  width: number;
  height: number;
}

const HomeIcon: React.FC<IconProps> = ({ color, width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
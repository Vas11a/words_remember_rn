import { Text, TouchableOpacity } from "react-native"

interface Props {
    text: string;
    color: string;
    border_color: string
    fc: () => void;
    IconComponent?: React.ComponentType<{ color: string; width: number; height: number }>;
    border?: boolean;
    iconColor?: string;
    textColor?: string
}


export default function CustomSmallButton({ text, color, border_color, fc, IconComponent, border, iconColor, textColor }: Props) {
    return (
        <TouchableOpacity
            className={`${color} ${border_color}`}
            onPress={fc}
            activeOpacity={0.7}
            style={{
                alignItems: 'center',
                borderWidth: border ? 1 : 0,
                borderBottomWidth:4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                flexDirection: 'row',
                borderRadius: 4,
                width: 'auto',
            }}
        >   
            {IconComponent && <IconComponent color={iconColor ? iconColor : 'white'} width={18} height={18} />}
            <Text className={` ${textColor ? textColor : 'text-white'} font-medium text-xl text-center`} style={{ marginLeft: 8 }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

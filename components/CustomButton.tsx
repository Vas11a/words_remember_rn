import { Text, TouchableOpacity } from "react-native"

interface Props {
    text: string;
    color: string;
    border_color: string
    fc: () => void;
    IconComponent?: React.ComponentType<{ color: string; width: number; height: number }>;
    extraClasses?: string
}


export default function CustomButton({ text, color, border_color, fc, IconComponent, extraClasses}: Props) {
    return (
        <TouchableOpacity
            className={`${color} ${border_color} ${extraClasses}`}
            onPress={fc}
            activeOpacity={0.7}
            style={{
                alignItems: 'center',
                borderBottomWidth:6,
                paddingVertical: 1,
                borderRadius: 6,
                paddingHorizontal: 16,
                flexDirection: 'row',
            }}
        >
            {IconComponent && <IconComponent color="white" width={24} height={24} />}            
            <Text className=' text-white font-medium py-3 text-2xl text-center' style={{ marginLeft: IconComponent ? 15 : 0 }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

import { View, Text } from "react-native"
import CustomSmallButton from "@/components/CustomSmallButton"
import { useRouter } from "expo-router"
import HomeIcon from "@/assets/HomeIcon";
import SaveIcon from "@/assets/SaveIcon";

export default function Find_Screen() {
    const router = useRouter();
    const navigateToMainScreen = (screen: any) => {
        router.push(screen);
    };

    return (
        <View className="flex flex-col justify-between flex-1">
            <View className="flex justify-center items-center gap-5 flex-1">
                <Text className="text-5xl text-gray-400 font-semibold">Coming soon</Text>
                <CustomSmallButton
                    text='Home'
                    color='bg-blue-500'
                    border_color='border-blue-600'
                    fc={() => navigateToMainScreen('/')}
                    IconComponent={HomeIcon}
                />
            </View>
        </View>
    )
}
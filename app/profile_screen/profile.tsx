import { View, Text } from "react-native"
import ProfilModule from "@/modules/profile_module/ProfilModule"

export default function Profile_Screen() {
    return (
        <View className="flex flex-col flex-1">
            <ProfilModule/>
        </View>
    )
}
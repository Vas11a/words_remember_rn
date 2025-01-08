import { Slot } from "expo-router";
import "../global.css";
import BottomNavBar from "@/components/BottomNavBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default function RootLayout() {
    

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        >
            <Slot />
            <BottomNavBar />
        </KeyboardAwareScrollView>
    );
}

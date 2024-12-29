import { Dimensions, Text, View } from "react-native";
import FindIcon from "@/assets/FindIcon";
import DataBaseIcon from "@/assets/DataBaseIcon";
import ProfilIcon from "@/assets/ProfilIcon";
import { Link, usePathname } from "expo-router";

export default function BottomNavBar() {
  const pathname = usePathname();
  const screenWidth = Dimensions.get("window").width;

  const shouldShowNavBar = () => {
    if (pathname === "/play_screen/play") {
      return false;
    } else {
      return true;
    }
  }

  if (shouldShowNavBar() === false) {
    return null
  }

  return (
    <View className="flex flex-row justify-between border-t border-gray-500 px-2 py-2">
      <Link href="/find_screen/find" className="flex-1 text-center">
        <View className="flex flex-col gap-1 items-center">
          <FindIcon color={pathname === "/find_screen/find" ? "#61A6FA" : "#6b7280"} width={22} height={22} />
          <Text className={pathname === "/find_screen/find" ? "font-semibold" : "font-normal"}>{screenWidth > 400 ? "Find collection" : "Find coll..."}</Text>
        </View>
      </Link>
      <Link href="/" className="flex-1 text-center">
        <View className="flex flex-col gap-1 items-center">
          <DataBaseIcon color={pathname === "/" ? "#61A6FA" : "#6b7280"} width={22} height={22} />
          <Text className={pathname === "/" ? "font-semibold" : "font-normal"}>Your collections</Text>
        </View>
      </Link>
      <Link href="/profile_screen/profile" className="flex-1 text-center">
        <View className="flex flex-col gap-1 items-center">
          <ProfilIcon color={pathname === "/profile_screen/profile" ? "#61A6FA" : "#6b7280"} width={22} height={22} />
          <Text className={pathname === "/profile_screen/profile" ? "font-semibold" : "font-normal"}>Profile</Text>
        </View>
      </Link>
    </View>
  );
}

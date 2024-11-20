import { View } from "react-native";
import { useFonts } from "expo-font";
import { RootLayout } from "./routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Pretendard-Black": require("@/src/shared/assets/font/Pretendard-Black.otf"),
    "Pretendard-ExtraBold": require("@/src/shared/assets/font/Pretendard-ExtraBold.otf"),
    "Pretendard-Bold": require("@/src/shared/assets/font/Pretendard-Bold.otf"),
    "Pretendard-SemiBold": require("@/src/shared/assets/font/Pretendard-SemiBold.otf"),
    "Pretendard-Medium": require("@/src/shared/assets/font/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("@/src/shared/assets/font/Pretendard-Regular.otf"),
    "Pretendard-Light": require("@/src/shared/assets/font/Pretendard-Light.otf"),
    "Pretendard-Thin": require("@/src/shared/assets/font/Pretendard-Thin.otf"),
  });

  if (!fontsLoaded) return <View />;

  return <RootLayout />;
}

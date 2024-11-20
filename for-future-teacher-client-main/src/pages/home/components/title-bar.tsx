import { COLOR_BLACK } from "@/src/shared";
import { StyleSheet, Text } from "react-native";

function TitleBar() {
  return <Text style={styles.title}>꿈꾸는 임용</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,
  },
});

export { TitleBar };

import { COLOR_BLACK, COLOR_PRIMARY_LIGHT, COLOR_WHITE, convertWidth, NavProp } from "@/src/shared";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function TitleBar() {
  const navigation = useNavigation<NavProp<"main/index">>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>기출문제</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(382),

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 35,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,
  },

  button: {
    width: convertWidth(90),
    height: convertWidth(40),

    backgroundColor: COLOR_PRIMARY_LIGHT,
    borderRadius: convertWidth(7),

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 13,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_WHITE,
  },
});

export { TitleBar };

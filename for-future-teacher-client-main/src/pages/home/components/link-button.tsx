import { COLOR_BLACK, COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { Pressable, StyleSheet, Text, View } from "react-native";

function LinkButton({ text, onPress }: { text: string; onPress: () => void }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(358),
    height: convertHeight(83),
    backgroundColor: COLOR_BLACK,

    borderRadius: convertWidth(7),

    elevation: 5,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_WHITE,
  },
});

export { LinkButton };

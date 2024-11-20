import { COLOR_PRIMARY_LIGHT_60, COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ListElement({
  title,
  writer,
  onPress,
}: {
  title: string;
  writer: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{writer}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(382),
    height: convertHeight(92),

    borderRadius: convertWidth(7),

    backgroundColor: COLOR_PRIMARY_LIGHT_60,

    marginBottom: convertHeight(21),

    paddingVertical: convertHeight(19),
    paddingHorizontal: convertWidth(19),

    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontFamily: "Pretendard-Medium",
    color: COLOR_WHITE,
  },

  author: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,
  },
});

export { ListElement };

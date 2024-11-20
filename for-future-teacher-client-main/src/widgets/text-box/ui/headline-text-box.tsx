import { COLOR_BLACK, COLOR_BLACK_30, convertHeight } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";

function HeadlineTextBox({ title, subTitle = null }: { title: string; subTitle?: string | null }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subTitle === null ? null : <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,
  },

  subTitle: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK_30,

    marginTop: convertHeight(6),
  },
});

export { HeadlineTextBox };

import { useQuestionReadStore } from "@/src/features";
import { COLOR_BLACK, convertDateMMDDHHMM, convertHeight, convertWidth } from "@/src/shared";
import { SizedBox } from "@/src/widgets";
import { StyleSheet, Text, View } from "react-native";

function PostContainer() {
  const { title, content, writer, writtenDate } = useQuestionReadStore();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SizedBox height={convertHeight(19)} />
      <Text style={styles.content}>{content}</Text>
      <SizedBox height={convertHeight(19)} />
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>{writer}</Text>
        <View style={styles.divider} />
        <Text style={styles.infoText}>{convertDateMMDDHHMM(writtenDate)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(380),
  },

  title: {
    fontSize: 22,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,
  },

  content: {
    fontSize: 15,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  divider: {
    width: convertWidth(1),
    height: convertHeight(11),
    backgroundColor: COLOR_BLACK,

    marginHorizontal: convertWidth(5),
  },

  infoText: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },
});

export { PostContainer };

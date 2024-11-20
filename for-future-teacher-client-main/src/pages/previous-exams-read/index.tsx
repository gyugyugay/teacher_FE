import { usePreviousExamsListStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_LIGHT,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { GoBackAppBar, HorizontalDivider, PageIndexBar, SizedBox } from "@/src/widgets";
import { Image, StyleSheet, Text, View } from "react-native";

function PreviousExamsReadPage() {
  const {
    selectedExam: { title, writer, src },
  } = usePreviousExamsListStore();
  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>작성자: {writer}</Text>
      <SizedBox height={convertHeight(18)} />
      <Image style={{ width: convertWidth(395), height: convertHeight(601) }} source={src!} />
      <SizedBox height={convertHeight(19)} />
      <HorizontalDivider width={convertWidth(380)} />
      <SizedBox height={convertHeight(22)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: COLOR_WHITE,
    alignItems: "center",
  },

  title: {
    fontSize: 23,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,

    width: convertWidth(380),
    marginBottom: convertHeight(4),
  },

  author: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,

    width: convertWidth(380),
  },

  image: {
    width: convertWidth(395),
    height: convertHeight(601),
  },
});

export { PreviousExamsReadPage };

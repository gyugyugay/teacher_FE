import { COLOR_BLACK, COLOR_BLACK_30, convertHeight, convertWidth } from "@/src/shared";
import { SizedBox } from "@/src/widgets";
import { StyleSheet, Text, View } from "react-native";

function TitleBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{"꿈꾸는 임용"}</Text>
      <SizedBox height={convertHeight(16)} />
      <Text style={styles.subText}>사용자 인증을 통해 서비스를 만나보세요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(348),
  },

  titleText: {
    fontSize: 48,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,
    lineHeight: 55,
  },

  subText: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK_30,
  },
});

export { TitleBar };

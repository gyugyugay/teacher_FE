import { COLOR_BLACK, COLOR_PRIMARY_DARK, convertWidth } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";

function ResultField({ result }: { result: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>회원님의 아이디는</Text>
      <Text style={styles.textBold}>{result}</Text>
      <Text style={styles.text}>입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(348),
  },

  text: {
    fontSize: 25,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,
  },

  textBold: {
    fontSize: 20,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_PRIMARY_DARK,
  },
});

export { ResultField };

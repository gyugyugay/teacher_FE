import { COLOR_BLACK, COLOR_PRIMARY_DARK, convertWidth } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";

function ResultField() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"회원님의 임시 비밀번호를\n이메일로 발송하였습니다."}
      </Text>
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
});

export { ResultField };

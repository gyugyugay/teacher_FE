import { useQuizWriteStore } from "@/src/features";
import { COLOR_BLACK, COLOR_PRIMARY_LIGHT, COLOR_WHITE, convertWidth, NavProp } from "@/src/shared";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function TitleBar() {
  const navigation = useNavigation<NavProp<"main/index">>();
  const { init: quizWriteInit } = useQuizWriteStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>문제 공유</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          quizWriteInit();
          navigation.navigate("quiz/write");
        }}
      >
        <Text style={styles.buttonText}>문제 작성하기</Text>
      </Pressable>
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
    width: convertWidth(113),
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

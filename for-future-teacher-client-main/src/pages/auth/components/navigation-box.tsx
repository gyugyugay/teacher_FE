import { COLOR_BLACK_80, convertWidth, NavProp } from "@/src/shared";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function NavigationBox() {
  const navigation = useNavigation<NavProp<"auth/index">>();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("auth/sign-up");
        }}
      >
        <Text style={styles.buttonText}>회원가입</Text>
      </Pressable>
      <View style={styles.divider} />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("auth/find-id");
        }}
      >
        <Text style={styles.buttonText}>아이디 찾기</Text>
      </Pressable>
      <View style={styles.divider} />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("auth/find-password");
        }}
      >
        <Text style={styles.buttonText}>비밀번호 찾기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(333),
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: convertWidth(97),
    height: convertWidth(20),
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 12,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK_80,
  },

  divider: {
    width: convertWidth(1),
    height: convertWidth(17),
    backgroundColor: COLOR_BLACK_80,
    marginHorizontal: convertWidth(10),
  },
});

export { NavigationBox };

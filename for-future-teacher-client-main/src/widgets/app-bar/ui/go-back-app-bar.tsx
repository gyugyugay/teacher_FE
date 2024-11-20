import { COLOR_BLACK_30, convertHeight, convertWidth } from "@/src/shared";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoBackAppBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.text}>{"< 돌아가기"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(430),
    height: convertHeight(54),

    flexDirection: "row",
    alignItems: "center",
    paddingLeft: convertWidth(27),
  },

  text: {
    fontSize: 15,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK_30,

    textAlignVertical: "center",
  },
});

export { GoBackAppBar };

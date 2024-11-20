import { useQuestionReadStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_LIGHT,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function InputBar() {
  const { commentInput, setCommentInput, postComment } = useQuestionReadStore();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        cursorColor={COLOR_BLACK}
        value={commentInput}
        onChangeText={(text) => setCommentInput(text)}
        onSubmitEditing={postComment}
        placeholder="댓글을 입력해주세요."
      />
      <Pressable style={styles.sendButton} onPress={postComment}>
        <Text style={styles.send}>작성</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(380),

    flexDirection: "row",

    position: "absolute",
    bottom: convertHeight(55),

    justifyContent: "space-between",
  },

  inputField: {
    width: convertWidth(313),
    height: convertHeight(33),
    borderRadius: convertWidth(7),
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY_LIGHT,
    paddingLeft: convertWidth(11),

    fontSize: 15,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  sendButton: {
    width: convertWidth(51),
    height: convertHeight(33),
    borderRadius: convertWidth(7),
    backgroundColor: COLOR_PRIMARY_LIGHT,

    alignItems: "center",
    justifyContent: "center",
  },

  send: {
    fontSize: 15,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,
  },
});

export { InputBar };

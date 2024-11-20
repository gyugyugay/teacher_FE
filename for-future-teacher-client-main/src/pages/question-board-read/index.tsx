import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { GoBackAppBar, HorizontalDivider, SizedBox } from "@/src/widgets";
import { ScrollView, StyleSheet, View } from "react-native";
import { PostContainer } from "./components/post-container";
import { ReplyElement } from "./components/reply-element";
import { InputBar } from "./components/input-bar";
import { useQuestionReadStore } from "@/src/features";

function QuestionBoardReadPage() {
  const { comments } = useQuestionReadStore();
  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <View style={styles.scrollBox}>
        <ScrollView>
          <PostContainer />
          <SizedBox height={24} />
          <HorizontalDivider width={convertWidth(380)} />
          <SizedBox height={19} />
          {comments.map((comment) => (
            <ReplyElement
              key={comment.commentId}
              commentId={comment.commentId}
              content={comment.content}
              writer={comment.writer}
              writerId={comment.writerId}
            />
          ))}
        </ScrollView>
      </View>

      <InputBar />
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

  scrollBox: {
    height: convertHeight(670),
  },
});

export { QuestionBoardReadPage };

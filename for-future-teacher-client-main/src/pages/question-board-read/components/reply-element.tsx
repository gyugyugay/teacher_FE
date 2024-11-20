import { useQuestionReadStore, useUserStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_BLACK_6,
  COLOR_PRIMARY_LIGHT,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";

function ReplyElement({
  commentId,
  content,
  writer,
  writerId,
}: {
  commentId: number;
  content: string;
  writer: string;
  writerId: number;
}) {
  const { nickname } = useUserStore();
  const { deleteComment } = useQuestionReadStore();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.writer}>{writer}</Text>
        {nickname === writer && (
          <Text
            style={styles.delete}
            onPress={() => {
              deleteComment({ commentId });
            }}
          >
            삭제
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(382),

    backgroundColor: COLOR_BLACK_6,
    borderRadius: convertWidth(7),

    paddingHorizontal: convertWidth(19),
    paddingTop: convertHeight(19),
    paddingBottom: convertHeight(10),

    marginBottom: convertHeight(13),
  },

  content: {
    fontSize: 12,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: convertHeight(12),
  },

  writer: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  delete: {
    fontSize: 9,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,

    paddingHorizontal: convertWidth(9),
    paddingVertical: convertHeight(3),

    backgroundColor: COLOR_PRIMARY_LIGHT,
    borderRadius: convertWidth(7),
  },
});

export { ReplyElement };

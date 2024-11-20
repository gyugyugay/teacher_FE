import { useQuizReadStore, useQuizWriteStore, useUserStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK,
  COLOR_WHITE,
  convertDateMMDDHHMM,
  convertHeight,
  convertWidth,
  NavProp,
} from "@/src/shared";
import { errorAlert } from "@/src/widgets";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function TitleBar() {
  const navigation = useNavigation<NavProp<"quiz/read">>();
  const { id, title, previousExam, writer, date, deleteQuiz, problem, choices } =
    useQuizReadStore();
  const { nickname } = useUserStore();
  const { initModification } = useQuizWriteStore();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {previousExam === "기출" && <Text style={styles.previousExam}>기출</Text>}
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{writer}</Text>
          <View style={styles.divider} />
          <Text style={styles.infoText}>{convertDateMMDDHHMM(date)}</Text>
        </View>
      </View>
      {nickname === writer && (
        <View style={styles.buttonColumn}>
          <Text
            style={styles.button}
            onPress={() => {
              initModification({
                quizId: id,
                title,
                problem,
                previousExam,
                choices,
              }).then((res) => {
                if (res) navigation.navigate("quiz/write");
                else errorAlert("문제 수정할 수 없습니다.");
              });
            }}
          >
            수정
          </Text>
          <Text
            style={styles.button}
            onPress={() => {
              deleteQuiz().then((res) => {
                if (res) navigation.goBack();
                else errorAlert("문제 삭제할 수 없습니다.");
              });
            }}
          >
            삭제
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(380),
    height: convertHeight(52),

    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: convertHeight(7),
  },

  title: {
    fontSize: 23,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,

    marginRight: convertWidth(8),

    lineHeight: convertHeight(33),
  },

  previousExam: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,

    width: convertWidth(38),
    height: convertHeight(17),
    borderRadius: convertWidth(7),

    backgroundColor: COLOR_PRIMARY_DARK,

    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: convertHeight(17),
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  divider: {
    width: convertWidth(1),
    height: convertHeight(11),
    backgroundColor: COLOR_BLACK,

    marginHorizontal: convertWidth(5),
  },

  infoText: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  buttonColumn: {
    justifyContent: "space-between",
  },

  button: {
    fontSize: 13,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,

    width: convertWidth(49),
    height: convertHeight(23),
    borderRadius: convertWidth(7),

    backgroundColor: COLOR_WHITE,

    borderWidth: convertWidth(1.4),
    borderColor: COLOR_BLACK,

    textAlign: "center",
    textAlignVertical: "center",
  },
});

export { TitleBar };

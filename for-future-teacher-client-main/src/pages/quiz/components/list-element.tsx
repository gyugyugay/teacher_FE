import { useQuizReadStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT,
  COLOR_PRIMARY_LIGHT_30,
  COLOR_PRIMARY_LIGHT_60,
  COLOR_WHITE,
  convertDateMMDDHHMM,
  convertHeight,
  convertWidth,
  NavProp,
} from "@/src/shared";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ListElement({
  id,
  title,
  date,
  writer,
  difficulty,
  previousExam,
}: {
  id: number;
  title: string;
  date: Date;
  writer: string;
  difficulty: "신규" | "상" | "중" | "하";
  previousExam: "기출" | "비기출";
}) {
  const navigation = useNavigation<NavProp<"main/index">>();
  const { init: quizInit } = useQuizReadStore();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        quizInit({ id, previousExam }).then((res) => {
          if (res) navigation.navigate("quiz/read");
        });
      }}
    >
      <View style={styles.titleBox}>
        <Text style={styles.index}>{id}</Text>
        <Text style={[styles.title, previousExam === "기출" ? styles.title_previousExam : {}]}>
          {title}
        </Text>
      </View>
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{writer}</Text>
          <View style={styles.divider} />
          <Text style={styles.infoText}>{convertDateMMDDHHMM(date)}</Text>
        </View>
        <Text style={[styles.difficulty, styles[difficulty]]}>{difficulty}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(382),
    height: convertHeight(64),

    borderRadius: convertWidth(7),

    backgroundColor: COLOR_WHITE,
    borderWidth: convertWidth(1),
    borderColor: COLOR_BLACK,

    marginBottom: convertHeight(21),

    paddingVertical: convertHeight(10),
    paddingHorizontal: convertWidth(10),

    justifyContent: "space-between",
  },

  titleBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  index: {
    fontSize: 10,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,

    paddingHorizontal: convertWidth(8),
    paddingVertical: convertHeight(4),

    backgroundColor: COLOR_PRIMARY_LIGHT_30,
    borderRadius: convertWidth(7),

    marginRight: convertWidth(8),
  },

  title: {
    fontSize: 18,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,

    lineHeight: convertHeight(23),
  },
  title_previousExam: {
    color: COLOR_PRIMARY_DARK,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
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
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },

  difficulty: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: convertHeight(17),

    width: convertWidth(38),
    height: convertHeight(17),
    borderRadius: convertWidth(7),
  },

  신규: {
    backgroundColor: COLOR_WHITE,
    borderWidth: convertWidth(1),
    borderColor: COLOR_BLACK,
  },

  하: {
    backgroundColor: COLOR_PRIMARY_LIGHT_30,
  },

  중: {
    backgroundColor: COLOR_PRIMARY_LIGHT_60,
  },

  상: {
    backgroundColor: COLOR_PRIMARY_LIGHT,
  },
});

export { ListElement };

import { useQuestionReadStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_BLACK_6,
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
  writer,
  date,
}: {
  id: number;
  title: string;
  writer: string;
  date: Date;
}) {
  const navigation = useNavigation<NavProp<"main/index">>();
  const { init: initQuestionRead } = useQuestionReadStore();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        initQuestionRead({ postId: id });
        navigation.navigate("question-board/read");
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>{writer}</Text>
        <View style={styles.divider} />
        <Text style={styles.infoText}>{convertDateMMDDHHMM(date)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(382),

    backgroundColor: COLOR_BLACK_6,
    borderRadius: convertWidth(7),

    padding: convertWidth(19),
    justifyContent: "space-between",

    marginBottom: convertHeight(21),
  },

  title: {
    fontSize: 15,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,

    marginBottom: convertHeight(28),
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
    fontSize: 10,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },
});

export { ListElement as ListElement };

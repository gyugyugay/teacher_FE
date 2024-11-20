import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { ConfirmButton, GoBackAppBar, HorizontalDivider, SizedBox } from "@/src/widgets";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { TitleBar } from "./components/title-bar";
import { useQuizReadStore } from "@/src/features";

function QuizReadPage() {
  const {
    problem,
    choices,
    selectedChoice,
    setSelectedChoice,
    checkAnswer,
    isCorrect,
    explanation,
  } = useQuizReadStore();
  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <TitleBar />
      <ScrollView>
        <SizedBox height={convertHeight(10)} />
        <HorizontalDivider width={convertWidth(380)} />
        <SizedBox height={convertHeight(20)} />
        <Text style={styles.question}>{problem}</Text>
        <SizedBox height={convertHeight(43)} />
        <View style={styles.choices}>
          {choices.map((choice, idx) => (
            <Text
              key={idx}
              style={[styles.choice, idx === selectedChoice ? styles.selectedChoice : {}]}
              onPress={() => {
                if (selectedChoice === idx) setSelectedChoice(-1);
                else setSelectedChoice(idx);
              }}
            >
              {`${idx + 1}. ${choice}`}
            </Text>
          ))}
        </View>

        <SizedBox height={convertHeight(10)} />

        {isCorrect ? (
          <Text style={styles.question}>{explanation}</Text>
        ) : (
          <ConfirmButton
            text="확인하기"
            disabled={false}
            onConfirm={() => {
              checkAnswer().then((res) => {
                if (res) Alert.alert("정답입니다!!");
                else Alert.alert("틀렸습니다!");
              });
            }}
            width={convertWidth(380)}
          />
        )}
      </ScrollView>
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

  question: {
    fontSize: 18,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,

    paddingHorizontal: convertWidth(26),
    paddingVertical: convertHeight(21),

    width: convertWidth(382),
    backgroundColor: COLOR_WHITE,
    borderWidth: convertWidth(1),
    borderColor: COLOR_BLACK,
    borderRadius: convertWidth(7),

    textAlign: "center",
  },

  choices: {
    width: convertWidth(382),
  },

  choice: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,

    paddingHorizontal: convertWidth(15),
    paddingVertical: convertHeight(15),

    width: convertWidth(382),
    backgroundColor: COLOR_BLACK,
    borderRadius: convertWidth(7),

    textAlign: "center",

    marginBottom: convertHeight(15),
  },

  selectedChoice: {
    backgroundColor: COLOR_PRIMARY_DARK,
  },
});

export { QuizReadPage };

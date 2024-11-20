import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import {
  ConfirmButton,
  GoBackAppBar,
  HeadlineTextBox,
  HorizontalDivider,
  InputBox,
  InputContentBox,
  SizedBox,
} from "@/src/widgets";
import { ScrollView, StyleSheet, View } from "react-native";
import { InputPreviousExam } from "./components/input-previous-exam";
import { InputChoices } from "./components/input-chocies";
import { InputAnswer } from "./components/input-answer";
import { useQuizWriteStore } from "@/src/features/quiz";
import { useNavigation } from "expo-router";

function QuizWritePage() {
  const navigation = useNavigation();
  const {
    title,
    problem,
    explanation,
    isSumbitable,
    setTitle,
    setProblem,
    setExplanation,
    trySubmit,
    isModification,
  } = useQuizWriteStore();

  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <View style={styles.titleBar}>
        <HeadlineTextBox title={isModification ? "문제 수정" : "문제 등록"} />
      </View>
      <SizedBox height={26} />

      <View style={styles.inputField}>
        <ScrollView>
          <InputBox
            title={"제목"}
            placeHolder={"문제 제목을 입력하세요."}
            val={title}
            setVal={setTitle}
            onConfirm={() => {}}
            width={convertWidth(380)}
          />
          <SizedBox height={26} />
          <InputContentBox
            title={"문제"}
            placeHolder={"문제 내용을 입력하세요."}
            val={problem}
            setVal={setProblem}
            onConfirm={() => {}}
            width={convertWidth(380)}
            height={convertWidth(132)}
          />
          <SizedBox height={26} />
          <InputPreviousExam />
          <SizedBox height={26} />
          <InputChoices />
          <SizedBox height={26} />
          <InputAnswer />
          <SizedBox height={26} />
          <InputContentBox
            title={"해설"}
            placeHolder={"문제 해설을 입력하세요."}
            val={explanation}
            setVal={setExplanation}
            onConfirm={() => {}}
            width={convertWidth(380)}
            height={convertWidth(132)}
          />
        </ScrollView>
      </View>

      <SizedBox height={13} />
      <HorizontalDivider width={convertWidth(380)} />
      <SizedBox height={13} />
      <ConfirmButton
        text="글 등록하기"
        disabled={!isSumbitable}
        onConfirm={() => {
          trySubmit().then((res) => {
            if (res) navigation.goBack();
          });
        }}
        width={convertWidth(380)}
      />
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

  titleBar: {
    width: convertWidth(380),
  },

  inputField: {
    width: convertWidth(430),
    height: convertHeight(600),
    alignItems: "center",
  },
});

export { QuizWritePage };

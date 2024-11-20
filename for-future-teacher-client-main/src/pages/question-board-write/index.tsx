import { useQuestionWriteStore } from "@/src/features";
import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import {
  ConfirmButton,
  errorAlert,
  GoBackAppBar,
  HeadlineTextBox,
  HorizontalDivider,
  InputBox,
  InputContentBox,
  SizedBox,
} from "@/src/widgets";
import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

function QuestionBoardWritePage() {
  const navigaton = useNavigation();

  const { init, title, setTitle, content, setContent, isSubmitPossible, tryWrite } =
    useQuestionWriteStore();
  const contentRef = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      init();
    }, [])
  );

  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <View style={styles.titleBar}>
        <HeadlineTextBox title="글 작성하기" />
      </View>
      <SizedBox height={convertHeight(26)} />
      <InputBox
        title="제목"
        placeHolder="제목을 입력해주세요."
        val={title}
        setVal={setTitle}
        onConfirm={() => {
          contentRef.current?.focus();
        }}
        width={convertWidth(380)}
      />
      <SizedBox height={convertHeight(26)} />
      <InputContentBox
        title="내용"
        placeHolder="내용을 입력해주세요."
        val={content}
        setVal={setContent}
        onConfirm={() => {
          tryWrite().then((isSuccess) => {
            if (isSuccess) navigaton.goBack();
          });
        }}
        width={convertWidth(380)}
        height={convertHeight(448)}
        inputRef={contentRef}
      />
      <SizedBox height={convertHeight(36)} />
      <HorizontalDivider width={convertWidth(380)} />
      <SizedBox height={convertHeight(13)} />
      <ConfirmButton
        text="작성 완료"
        disabled={!isSubmitPossible}
        onConfirm={() => {
          tryWrite().then((isSuccess) => {
            if (isSuccess) navigaton.goBack();
            else errorAlert("글 작성에 실패했습니다.");
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

    alignItems: "center",

    backgroundColor: COLOR_WHITE,
  },

  titleBar: {
    width: convertWidth(380),
  },
});

export { QuestionBoardWritePage };

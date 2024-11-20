import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import {
  ConfirmButton,
  errorAlert,
  GoBackAppBar,
  HeadlineTextBox,
  HorizontalDivider,
  SizedBox,
} from "@/src/widgets";
import { StyleSheet, View } from "react-native";
import { InputField } from "./components/input-field";
import { ResultField } from "./components/result-field";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "expo-router";
import { useFindIdStore } from "@/src/features";

function FindIdPage() {
  const navigation = useNavigation();
  const { init, result, isFindIdPossible, tryFindId } = useFindIdStore();

  useFocusEffect(
    useCallback(() => {
      init();
    }, [])
  );

  return (
    <View style={styles.container}>
      <GoBackAppBar />
      <SizedBox height={convertHeight(25)} />
      <View style={styles.titleBar}>
        <HeadlineTextBox title="아이디 찾기" subTitle="아이디를 찾기 위해 정보를 입력해 주세요." />
      </View>
      <SizedBox height={convertHeight(25)} />

      {result === null ? <InputField /> : <ResultField result={result} />}

      <SizedBox height={convertHeight(38)} />
      <HorizontalDivider width={convertWidth(333)} />
      <SizedBox height={convertHeight(14)} />
      {result === null ? (
        <ConfirmButton
          text="아이디 찾기"
          disabled={!isFindIdPossible}
          onConfirm={() => {
            tryFindId().then((res) => {
              if (res) return;
              errorAlert("존재하지 않는 회원입니다.");
            });
          }}
          width={convertWidth(348)}
        />
      ) : (
        <ConfirmButton
          text="돌아가기"
          disabled={false}
          onConfirm={() => {
            navigation.goBack();
          }}
          width={convertWidth(348)}
        />
      )}
      <SizedBox height={convertHeight(57)} />
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
    width: convertWidth(348),
  },
});

export { FindIdPage };

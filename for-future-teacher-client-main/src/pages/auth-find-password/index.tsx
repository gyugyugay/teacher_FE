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
import { useFindPasswordStore } from "@/src/features";

function FindPasswordPage() {
  const navigation = useNavigation();
  const { init, result, isFindPasswordPossible, tryFindPassword } = useFindPasswordStore();

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
        <HeadlineTextBox
          title="비밀번호 찾기"
          subTitle="임시 비밀번호를 발급하기 위해 정보를 입력해 주세요."
        />
      </View>
      <SizedBox height={convertHeight(25)} />

      {!result ? <InputField /> : <ResultField />}

      <SizedBox height={convertHeight(38)} />
      <HorizontalDivider width={convertWidth(333)} />
      <SizedBox height={convertHeight(14)} />
      {!result ? (
        <ConfirmButton
          text="임시 비밀번호 발급하기"
          disabled={!isFindPasswordPossible}
          onConfirm={() => {
            tryFindPassword().then((res) => {
              if (!res) errorAlert("비밀번호 찾기에 실패했습니다.");
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

export { FindPasswordPage };

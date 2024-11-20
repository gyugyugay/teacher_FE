import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { GoBackAppBar, HeadlineTextBox, SizedBox } from "@/src/widgets";
import { StyleSheet, View } from "react-native";
import { InputField } from "./components/input-field";
import { useSignUpStore } from "@/src/features";
import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback } from "react";
import { TermsOfService } from "./components/terms-of-service";

function SignUpPage() {
  const { init, step } = useSignUpStore();
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
        <HeadlineTextBox title="회원가입" subTitle="서비스 가입을 위해 정보를 입력해 주세요." />
      </View>
      <SizedBox height={convertHeight(25)} />
      {step === 0 && <TermsOfService />}
      {step === 1 && <InputField />}
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: COLOR_WHITE,

    alignItems: "center",
    justifyContent: "flex-end",
  },

  titleBar: {
    width: convertWidth(348),
  },
});

export { SignUpPage };

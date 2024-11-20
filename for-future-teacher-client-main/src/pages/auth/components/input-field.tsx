import { useSignInStore } from "@/src/features";
import { convertHeight, convertWidth, NavProp } from "@/src/shared";
import { ConfirmButton, errorAlert, InputBox, InputPasswordBox, SizedBox } from "@/src/widgets";
import { useNavigation } from "expo-router";
import { useRef } from "react";
import { TextInput, View } from "react-native";

function InputField() {
  const { id, password, setId, setPassword, isLoginPossible, trySignIn } = useSignInStore();

  const passwordRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavProp<"main/index">>();

  function signIn() {
    passwordRef.current?.blur();
    trySignIn().then((res) => {
      if (res) {
        navigation.reset({
          index: 0,
          routes: [{ name: "main/index" }],
        });
      } else {
        errorAlert("로그인에 실패했습니다.");
      }
    });
  }

  return (
    <View>
      <InputBox
        title="이메일"
        placeHolder="example@example.com"
        val={id}
        setVal={setId}
        onConfirm={() => {
          passwordRef.current?.focus();
        }}
        width={convertWidth(348)}
      />
      <SizedBox height={convertHeight(12)} />
      <InputPasswordBox
        title="비밀번호"
        placeHolder="비밀번호를 입력해주세요"
        val={password}
        setVal={setPassword}
        onConfirm={signIn}
        inputRef={passwordRef}
      />
      <SizedBox height={convertHeight(31)} />
      <ConfirmButton
        text="로그인"
        onConfirm={signIn}
        disabled={!isLoginPossible}
        width={convertWidth(348)}
      />
    </View>
  );
}

export { InputField };

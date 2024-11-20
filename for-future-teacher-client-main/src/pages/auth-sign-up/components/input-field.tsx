import { useSignUpStore } from "@/src/features";
import { convertHeight, convertWidth } from "@/src/shared";
import { ConfirmButton, errorAlert, HorizontalDivider, InputBox, SizedBox } from "@/src/widgets";
import { useNavigation } from "expo-router";
import { useRef } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";

function InputField() {
  const navigation = useNavigation();

  const {
    id,
    setId,
    password,
    setPassword,
    passwordCheck,
    setPasswordCheck,
    name,
    setName,
    phone,
    setPhone,
    nickname,
    setNickname,
    isPasswordConfirmed,
    isSignUpPossible,
    trySignUp,
    isIdDuplicated,
    isNicknameDuplicated,
    isPhoneDuplicated,
  } = useSignUpStore();

  const nicknameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordCheckRef = useRef<TextInput>(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <InputBox
          title={"아이디"}
          placeHolder="아이디를 입력해주세요."
          val={id}
          setVal={setId}
          onConfirm={() => {
            nicknameRef.current?.focus();
          }}
          width={convertWidth(348)}
          errorText={(isIdDuplicated && "이미 사용중인 아이디입니다.") || null}
        />
        <SizedBox height={convertHeight(14)} />
        <InputBox
          title={"닉네임"}
          placeHolder="닉네임을 입력해주세요."
          val={nickname}
          setVal={setNickname}
          onConfirm={() => {
            phoneRef.current?.focus();
          }}
          width={convertWidth(348)}
          inputRef={nicknameRef}
          errorText={(isNicknameDuplicated && "이미 사용중인 닉네임입니다.") || null}
        />
        <SizedBox height={convertHeight(14)} />
        <InputBox
          title={"전화번호"}
          placeHolder="전화번호를 입력해주세요."
          val={phone}
          setVal={setPhone}
          onConfirm={() => {
            nameRef.current?.focus();
          }}
          width={convertWidth(348)}
          inputRef={phoneRef}
          errorText={(isPhoneDuplicated && "이미 사용중인 전화번호입니다.") || null}
        />
        <SizedBox height={convertHeight(14)} />
        <InputBox
          title={"이름"}
          placeHolder="이름을 입력해주세요."
          val={name}
          setVal={setName}
          onConfirm={() => {
            passwordRef.current?.focus();
          }}
          width={convertWidth(348)}
          inputRef={nameRef}
        />
        <SizedBox height={convertHeight(14)} />
        <InputBox
          title={"비밀번호"}
          placeHolder="비밀번호를 입력해주세요."
          val={password}
          setVal={setPassword}
          onConfirm={() => {
            passwordCheckRef.current?.focus();
          }}
          width={convertWidth(348)}
          inputRef={passwordRef}
          isSecret={true}
        />
        <SizedBox height={convertHeight(14)} />
        <InputBox
          title={"비밀번호 확인"}
          placeHolder="비밀번호를 입력해주세요."
          val={passwordCheck}
          setVal={setPasswordCheck}
          onConfirm={() => {
            trySignUp().then((isSuccess) => {
              if (isSuccess) navigation.goBack();
            });
          }}
          width={convertWidth(348)}
          errorText={isPasswordConfirmed !== -1 ? null : "비밀번호가 일치하지 않습니다."}
          inputRef={passwordCheckRef}
          isSecret={true}
        />
        <SizedBox height={convertHeight(14)} />
        <HorizontalDivider width={convertWidth(333)} />
        <SizedBox height={convertHeight(14)} />
        <ConfirmButton
          text="회원가입"
          disabled={!isSignUpPossible}
          onConfirm={() => {
            trySignUp().then((res) => {
              if (res == -1) return;

              if (res == 1) navigation.goBack();
              else errorAlert("회원가입에 실패했습니다. 다시 시도해주세요.");
            });
          }}
          width={convertWidth(348)}
        />
        <SizedBox height={convertHeight(50)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: convertWidth(430),
  },
});

export { InputField };

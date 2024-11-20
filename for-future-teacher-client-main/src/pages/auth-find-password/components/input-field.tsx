import { useFindPasswordStore } from "@/src/features";
import { convertHeight, convertWidth } from "@/src/shared";
import { InputBox, SizedBox } from "@/src/widgets";
import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

function InputField() {
  const { name, setName, id, setId, tryFindPassword } = useFindPasswordStore();
  const idRef = useRef<TextInput>(null);

  return (
    <View>
      <InputBox
        title={"이름"}
        placeHolder="이름을 입력해주세요."
        val={name}
        setVal={setName}
        onConfirm={() => {
          idRef.current?.focus();
        }}
        width={convertWidth(348)}
      />
      <SizedBox height={convertHeight(14)} />
      <InputBox
        title={"아이디"}
        placeHolder="아이디를 입력해주세요."
        val={id}
        setVal={setId}
        onConfirm={() => {
          tryFindPassword();
        }}
        width={convertWidth(348)}
        inputRef={idRef}
      />
    </View>
  );
}

export { InputField };

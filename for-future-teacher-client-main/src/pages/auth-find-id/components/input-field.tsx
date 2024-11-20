import { useFindIdStore } from "@/src/features";
import { convertHeight, convertWidth } from "@/src/shared";
import { InputBox, SizedBox } from "@/src/widgets";
import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

function InputField() {
  const { name, setName, phone, setPhone, tryFindId } = useFindIdStore();
  const phoneRef = useRef<TextInput>(null);

  return (
    <View>
      <InputBox
        title={"이름"}
        placeHolder="이름을 입력해주세요."
        val={name}
        setVal={setName}
        onConfirm={() => {
          phoneRef.current?.focus();
        }}
        width={convertWidth(348)}
      />
      <SizedBox height={convertHeight(14)} />
      <InputBox
        title={"전화번호"}
        placeHolder="전화번호를 입력해주세요."
        val={phone}
        setVal={setPhone}
        onConfirm={() => {
          tryFindId();
        }}
        width={convertWidth(348)}
        inputRef={phoneRef}
      />
    </View>
  );
}

export { InputField };

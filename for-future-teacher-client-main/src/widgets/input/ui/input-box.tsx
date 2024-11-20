import {
  COLOR_BLACK,
  COLOR_BLACK_30,
  COLOR_PRIMARY_LIGHT,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { RefObject } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function InputBox({
  title,
  placeHolder,
  errorText = null,
  val,
  setVal,
  onConfirm,
  width,
  inputRef = null,
  isSecret = false,
}: {
  title: string;
  placeHolder: string;
  errorText?: string | null;
  val: string;
  setVal: (e: string) => void;
  onConfirm: () => void;
  width: number;
  inputRef?: RefObject<TextInput> | null;
  isSecret?: boolean;
}) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        ref={inputRef}
        style={[styles.inputBox, { width }]}
        value={val}
        onChangeText={setVal}
        cursorColor={COLOR_BLACK}
        placeholder={placeHolder}
        placeholderTextColor={COLOR_BLACK_30}
        onSubmitEditing={onConfirm}
        secureTextEntry={isSecret}
      />
      {errorText !== null && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,

    marginLeft: convertWidth(8),
    marginBottom: convertHeight(6),
  },

  inputBox: {
    borderRadius: convertWidth(7),
    borderWidth: 1,
    borderColor: COLOR_PRIMARY_LIGHT,

    paddingHorizontal: convertWidth(15),
    paddingVertical: convertHeight(13),

    fontSize: 15,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,
  },

  errorText: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_PRIMARY_LIGHT,

    marginLeft: "auto",
    marginRight: convertWidth(8),
    marginTop: convertHeight(6),
  },
});

export { InputBox };

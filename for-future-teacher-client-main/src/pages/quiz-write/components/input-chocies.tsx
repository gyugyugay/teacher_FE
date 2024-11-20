import { useQuizWriteStore } from "@/src/features/quiz";
import {
  COLOR_BLACK,
  COLOR_BLACK_30,
  COLOR_PRIMARY_LIGHT,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function InputChoices() {
  const { choices, setChoice, addChoice } = useQuizWriteStore();

  return (
    <View>
      <Text style={styles.titleText}>선지</Text>
      {choices.map((choice, index) => {
        return (
          <TextInput
            key={index}
            style={[styles.inputBox]}
            value={choice}
            onChangeText={(val) => {
              setChoice(index, val);
            }}
            cursorColor={COLOR_BLACK}
            placeholder={"선지를 입력하세요."}
            placeholderTextColor={COLOR_BLACK_30}
            onEndEditing={() => {}}
            multiline={true}
          />
        );
      })}
      {choices.length == 4 && (
        <Text style={styles.addButton} onPress={addChoice}>
          +
        </Text>
      )}
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
    paddingVertical: convertHeight(15),

    fontSize: 15,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,

    textAlignVertical: "top",

    width: convertWidth(382),

    marginBottom: convertHeight(6),
  },

  addButton: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,

    width: convertWidth(382),
    height: convertHeight(40),
    borderRadius: convertWidth(7),

    borderWidth: 1,
    borderColor: COLOR_PRIMARY_LIGHT,

    textAlign: "center",
    textAlignVertical: "center",
  },
});

export { InputChoices };

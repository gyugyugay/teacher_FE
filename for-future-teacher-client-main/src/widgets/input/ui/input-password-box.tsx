import {
  COLOR_BLACK,
  COLOR_BLACK_30,
  COLOR_PRIMARY_LIGHT,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { StyleSheet, Text, TextInput, View } from "react-native";

function InputPasswordBox({
  title,
  placeHolder,
  val,
  setVal,
  onConfirm,
  inputRef = null,
}: {
  title: string;
  placeHolder: string;
  val: string;
  setVal: (e: string) => void;
  onConfirm: () => void;
  inputRef?: any;
}) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        ref={inputRef}
        style={styles.inputBox}
        value={val}
        onChangeText={setVal}
        cursorColor={COLOR_BLACK}
        placeholder={placeHolder}
        placeholderTextColor={COLOR_BLACK_30}
        secureTextEntry={true}
        onEndEditing={(e) => {
          e.currentTarget.blur();
        }}
        onSubmitEditing={onConfirm}
      />
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
    width: convertWidth(348),
    borderRadius: convertWidth(7),
    borderWidth: 1,
    borderColor: COLOR_PRIMARY_LIGHT,

    paddingHorizontal: convertWidth(15),
    paddingVertical: convertHeight(13),
  },
});

export { InputPasswordBox };

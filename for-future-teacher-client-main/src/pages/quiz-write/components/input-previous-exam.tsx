import { COLOR_BLACK, COLOR_PRIMARY_LIGHT, convertHeight, convertWidth } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useQuizWriteStore } from "@/src/features/quiz";

function InputPreviousExam() {
  const { previousExam, setPreviousExam } = useQuizWriteStore();
  return (
    <View>
      <Text style={styles.titleText}>기출여부</Text>
      <View style={styles.inputBox}>
        <Picker
          selectedValue={previousExam}
          onValueChange={(itemValue, itemIndex) => {
            setPreviousExam(itemValue);
          }}
        >
          <Picker.Item label="기출" value="기출" />
          <Picker.Item label="비기출" value="비기출" />
        </Picker>
      </View>
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

    fontSize: 15,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,

    width: convertWidth(380),
    height: convertHeight(60),
  },
});

export { InputPreviousExam };

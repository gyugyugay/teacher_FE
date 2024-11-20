import { COLOR_BLACK, COLOR_PRIMARY_LIGHT, convertHeight, convertWidth } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useQuizWriteStore } from "@/src/features";

function InputAnswer() {
  const { choices, setAnswer, answer } = useQuizWriteStore();

  return (
    <View>
      <Text style={styles.titleText}>정답</Text>
      <View style={styles.inputBox}>
        <Picker
          selectedValue={answer.toString()}
          onValueChange={(itemValue, itemIndex) => {
            setAnswer(Number(itemValue));
          }}
        >
          {choices.map((v, index) => (
            <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
          ))}
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

export { InputAnswer };

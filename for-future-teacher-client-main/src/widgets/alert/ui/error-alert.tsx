import { Alert } from "react-native";

function errorAlert(errorText: string) {
  Alert.alert(
    "에러",
    errorText,
    [
      {
        text: "확인",
        onPress: () => {},
      },
    ],
    { cancelable: false }
  );
}

export { errorAlert };

import { Alert } from "react-native";

function confirmAlert({
  text,
  onConfirm,
  onCancel = () => {},
}: {
  text: string;
  onConfirm: () => void;
  onCancel?: () => void;
}) {
  Alert.alert(
    "확인", // 타이틀
    text, // 메시지
    [
      {
        text: "아니오",
        onPress: onCancel,
        style: "cancel",
      },
      {
        text: "예",
        onPress: onConfirm,
      },
    ],
    { cancelable: false } // Alert 바깥 영역을 눌러 닫기 비활성화
  );
}

export { confirmAlert };

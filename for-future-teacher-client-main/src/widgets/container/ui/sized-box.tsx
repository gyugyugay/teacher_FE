import { View } from "react-native";

function SizedBox({
  width = 0,
  height = 0,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <View
      style={{
        width,
        height,
      }}
    />
  );
}

export { SizedBox };

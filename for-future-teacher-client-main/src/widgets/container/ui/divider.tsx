import { COLOR_BLACK_80, convertHeight, convertWidth } from "@/src/shared";
import { StyleSheet, View } from "react-native";

function HorizontalDivider({ width }: { width: number }) {
  return <View style={[styles.container, { width }]} />;
}

const styles = StyleSheet.create({
  container: {
    height: convertHeight(1),
    backgroundColor: COLOR_BLACK_80,
  },
});

export { HorizontalDivider };

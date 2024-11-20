import { COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { StyleSheet, View } from "react-native";
import { TitleBar } from "./components/title-bar";
import { HorizontalDivider, SizedBox } from "@/src/widgets";
import { InputField } from "./components/input-field";
import { NavigationBox } from "./components/navigation-box";
import { useSignInStore } from "@/src/features";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

function AuthPage() {
  const { init } = useSignInStore();

  useFocusEffect(
    useCallback(() => {
      init();
    }, [])
  );

  return (
    <View style={styles.container}>
      <TitleBar />
      <SizedBox height={convertHeight(14)} />
      <InputField />
      <SizedBox height={convertHeight(22)} />
      <HorizontalDivider width={convertWidth(333)} />
      <SizedBox height={convertHeight(15)} />
      <NavigationBox />
      <SizedBox height={convertHeight(300)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "flex-end",

    backgroundColor: COLOR_WHITE,
  },
});

export { AuthPage };

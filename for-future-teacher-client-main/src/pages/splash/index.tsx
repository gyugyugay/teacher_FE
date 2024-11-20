import { useUserStore } from "@/src/features";
import { getUserToken, NavProp } from "@/src/shared";
import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

function SplashPage() {
  const { navigate } = useNavigation<NavProp<"splash/index">>();
  const { init: userInit } = useUserStore();

  useFocusEffect(
    useCallback(() => {
      userInit().then((res) => {
        if (res) {
          navigate("main/index");
        } else {
          navigate("auth/index");
        }
      });
    }, [])
  );

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export { SplashPage };

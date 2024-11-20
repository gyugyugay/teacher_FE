import { StyleSheet, View } from "react-native";
import { NavigationBar } from "./components/navigation-bar";
import { COLOR_WHITE, convertWidth } from "@/src/shared";
import { QuestionBoardPage } from "../question-board";
import { HomePage } from "../home";
import { PreviousExamsPage } from "../previous-exams";
import { QuizPage } from "../quiz";
import { ProfilePage } from "../profile";
import { useEffect, useState } from "react";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

function MainPage() {
  const [index, setIndex] = useState(0);

  const left = useSharedValue(0);
  useEffect(() => {
    left.value = withTiming(index * convertWidth(-430), {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [index]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.pageRow, { left }]}>
        <HomePage />
        <QuestionBoardPage />
        <PreviousExamsPage />
        <QuizPage />
        <ProfilePage />
      </Animated.View>

      <NavigationBar navIdx={index} setNavIdx={setIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: COLOR_WHITE,
  },

  pageRow: {
    flexDirection: "row",
  },
});

export { MainPage };

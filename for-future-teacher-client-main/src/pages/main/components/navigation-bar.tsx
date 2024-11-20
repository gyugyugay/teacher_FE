import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import HomeIcon from "@/src/shared/assets/icons/navigation-bar/home.svg";
import HomeColoredIcon from "@/src/shared/assets/icons/navigation-bar/home-colored.svg";
import QuestionBoardIcon from "@/src/shared/assets/icons/navigation-bar/question-board.svg";
import QuestionBoardColoredIcon from "@/src/shared/assets/icons/navigation-bar/question-board-colored.svg";
import PreviousExamsIcon from "@/src/shared/assets/icons/navigation-bar/previous-exams.svg";
import PreviousExamsColoredIcon from "@/src/shared/assets/icons/navigation-bar/previous-exams-colored.svg";
import QuizIcon from "@/src/shared/assets/icons/navigation-bar/quiz.svg";
import QuizColoredIcon from "@/src/shared/assets/icons/navigation-bar/quiz-colored.svg";
import ProfileIcon from "@/src/shared/assets/icons/navigation-bar/profile.svg";
import ProfileColoredIcon from "@/src/shared/assets/icons/navigation-bar/profile-colored.svg";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect, useState } from "react";

const NavIndexBarConfig = {
  animatinonConfig: {
    duration: 300,
    easing: Easing.bezier(0.1, 0.71, 0.37, 0.9),
  },
  left: [
    convertWidth(42),
    convertWidth(121),
    convertWidth(200),
    convertWidth(279),
    convertWidth(358),
  ],

  text: ["홈", "질의응답", "기출문제", "문제 공유", "프로필"],
};

function NavigationBar({
  navIdx,
  setNavIdx,
}: {
  navIdx: number;
  setNavIdx: (idx: number) => void;
}) {
  const left = useSharedValue(NavIndexBarConfig.left[0]);
  useEffect(() => {
    left.value = withTiming(NavIndexBarConfig.left[navIdx], NavIndexBarConfig.animatinonConfig);
  }, [navIdx]);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setNavIdx(0);
        }}
        style={styles.navButton}
      >
        {navIdx === 0 ? (
          <HomeColoredIcon width={convertWidth(24)} height={convertHeight(24)} />
        ) : (
          <HomeIcon width={convertWidth(24)} height={convertHeight(24)} />
        )}
        <Text
          style={[styles.indexText, { color: navIdx === 0 ? COLOR_PRIMARY_DARK : COLOR_BLACK }]}
        >
          홈
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setNavIdx(1);
        }}
        style={styles.navButton}
      >
        {navIdx === 1 ? (
          <QuestionBoardColoredIcon width={convertWidth(24)} height={convertHeight(24)} />
        ) : (
          <QuestionBoardIcon width={convertWidth(24)} height={convertHeight(24)} />
        )}
        <Text
          style={[styles.indexText, { color: navIdx === 1 ? COLOR_PRIMARY_DARK : COLOR_BLACK }]}
        >
          질의응답
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setNavIdx(2);
        }}
        style={styles.navButton}
      >
        {navIdx === 2 ? (
          <PreviousExamsColoredIcon width={convertWidth(24)} height={convertHeight(24)} />
        ) : (
          <PreviousExamsIcon width={convertWidth(24)} height={convertHeight(24)} />
        )}
        <Text
          style={[styles.indexText, { color: navIdx === 2 ? COLOR_PRIMARY_DARK : COLOR_BLACK }]}
        >
          기출문제
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setNavIdx(3);
        }}
        style={styles.navButton}
      >
        {navIdx === 3 ? (
          <QuizColoredIcon width={convertWidth(24)} height={convertHeight(24)} />
        ) : (
          <QuizIcon width={convertWidth(24)} height={convertHeight(24)} />
        )}
        <Text
          style={[styles.indexText, { color: navIdx === 3 ? COLOR_PRIMARY_DARK : COLOR_BLACK }]}
        >
          문제 공유
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setNavIdx(4);
        }}
        style={styles.navButton}
      >
        {navIdx === 4 ? (
          <ProfileColoredIcon width={convertWidth(24)} height={convertHeight(24)} />
        ) : (
          <ProfileIcon width={convertWidth(24)} height={convertHeight(24)} />
        )}
        <Text
          style={[styles.indexText, { color: navIdx === 4 ? COLOR_PRIMARY_DARK : COLOR_BLACK }]}
        >
          프로필
        </Text>
      </Pressable>

      <Animated.View style={[styles.indexBar, { left }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(431),
    height: convertHeight(75),

    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: convertWidth(7),
    borderTopRightRadius: convertWidth(7),

    elevation: 20,

    position: "absolute",
    bottom: 0,

    flexDirection: "row",
    justifyContent: "space-evenly",

    paddingTop: convertHeight(16),
  },

  navButton: {
    width: convertWidth(43),
    height: convertHeight(45),

    alignItems: "center",
    justifyContent: "space-between",
  },

  indexText: {
    fontSize: 8,
    fontFamily: "Pretendard-Medium",
  },

  indexBar: {
    width: convertWidth(31),
    height: convertHeight(3),

    backgroundColor: COLOR_PRIMARY_DARK,

    position: "absolute",
    top: 0,
  },
});

export { NavigationBar };

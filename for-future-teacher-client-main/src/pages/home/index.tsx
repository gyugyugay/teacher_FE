import { COLOR_WHITE, convertHeight, convertWidth, NavProp } from "@/src/shared";
import { Linking, StyleSheet, View } from "react-native";
import { TitleBar } from "./components/title-bar";
import { HorizontalDivider, SizedBox } from "@/src/widgets";
import { QuoteBox } from "./components/quote-box";
import { LinkButton } from "./components/link-button";
import { useNavigation } from "expo-router";
import { useQuizListStore, useQuizReadStore } from "@/src/features";

function HomePage() {
  const navigation = useNavigation<NavProp<"main/index">>();
  const { quizList } = useQuizListStore();
  const { init: quizReadInit } = useQuizReadStore();
  return (
    <View style={styles.container}>
      <SizedBox height={convertHeight(43)} />
      <TitleBar />
      <SizedBox height={convertHeight(61)} />
      <QuoteBox />
      <SizedBox height={convertHeight(40)} />
      <HorizontalDivider width={convertWidth(358)} />
      <SizedBox height={convertHeight(40)} />
      <LinkButton
        text="추천문제 풀러가기"
        onPress={() => {
          if (quizList.length === 0) return;
          const randomQuiz = quizList[Math.floor(Math.random() * quizList.length)];
          quizReadInit({ id: randomQuiz.id, previousExam: randomQuiz.previousExam });
          navigation.navigate("quiz/read");
        }}
      />
      <SizedBox height={convertHeight(20)} />
      <LinkButton
        text="기출문제 보러가기"
        onPress={() => {
          Linking.openURL(
            "https://www.kice.re.kr/boardCnts/list.do?boardID=1500212&searchStr=&m=030306&s=kice"
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOR_WHITE,

    alignItems: "center",
  },

  button: {},
});

export { HomePage };

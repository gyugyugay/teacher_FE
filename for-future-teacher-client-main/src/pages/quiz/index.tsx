import { convertHeight, convertWidth } from "@/src/shared";
import { ScrollView, StyleSheet, View } from "react-native";
import { TitleBar } from "./components/title-bar";
import { PageIndexBar, SizedBox } from "@/src/widgets";
import { useCallback } from "react";
import { ListElement } from "./components/list-element";
import { useQuizListStore } from "@/src/features";
import { useFocusEffect } from "expo-router";

function QuizPage() {
  const {
    init: quizInit,
    quizList,
    page: { curPage, numPerPage },
    setCurPage,
  } = useQuizListStore();

  useFocusEffect(
    useCallback(() => {
      quizInit();
    }, [])
  );

  return (
    <View style={styles.container}>
      <SizedBox height={convertWidth(47)} />
      <TitleBar />
      <SizedBox height={convertWidth(32)} />
      <View style={styles.listContainer}>
        <ScrollView>
          {quizList.slice((curPage - 1) * numPerPage, curPage * numPerPage).map((quiz) => (
            <ListElement
              key={quiz.id}
              id={quiz.id}
              title={quiz.title}
              date={quiz.updatedAt}
              writer={quiz.writer}
              difficulty={quiz.difficulty}
              previousExam={quiz.previousExam}
            />
          ))}
        </ScrollView>
      </View>
      <SizedBox height={convertWidth(10)} />
      <PageIndexBar totPage={5} curPage={curPage} setCurPage={setCurPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  listContainer: {
    height: convertHeight(570),
  },
});

export { QuizPage };

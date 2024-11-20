import { convertHeight, convertWidth } from "@/src/shared";
import { ScrollView, StyleSheet, View } from "react-native";
import { TtileBar } from "./components/title-bar";
import { PageIndexBar, SizedBox } from "@/src/widgets";
import { ListElement } from "./components/list-element";
import { useCallback, useEffect, useState } from "react";
import { useQuestionListStore } from "@/src/features";
import { useFocusEffect } from "expo-router";

function QuestionBoardPage() {
  const {
    init,
    questionList,
    page: { curPage, totPage, numPerPage },
    setCurPage,
  } = useQuestionListStore();

  useFocusEffect(
    useCallback(() => {
      init();
    }, [])
  );

  return (
    <View style={styles.container}>
      <SizedBox height={convertWidth(47)} />
      <TtileBar />
      <SizedBox height={convertWidth(32)} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.listContainer}>
          {questionList.slice((curPage - 1) * numPerPage, curPage * numPerPage).map((question) => (
            <ListElement
              key={question.id}
              id={question.id}
              title={question.title}
              writer={question.writer}
              date={question.date}
            />
          ))}
        </View>
      </ScrollView>
      <SizedBox height={convertWidth(10)} />
      <PageIndexBar totPage={totPage} curPage={curPage} setCurPage={setCurPage} />
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
    width: convertWidth(375),
    height: convertHeight(570),
    alignItems: "center",
  },
});

export { QuestionBoardPage };

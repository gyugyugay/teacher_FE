import { convertHeight, convertWidth, NavProp } from "@/src/shared";
import { ScrollView, StyleSheet, View } from "react-native";
import { TitleBar } from "./components/title-bar";
import { PageIndexBar, SizedBox } from "@/src/widgets";
import { ListElement } from "./components/list-element";
import { usePreviousExamsListStore } from "@/src/features";
import { useNavigation } from "expo-router";

function PreviousExamsPage() {
  const navigation = useNavigation<NavProp<"main/index">>();
  const {
    previousExamsList,
    page: { curPage, totPage, numPerPage },
    setCurPage,
    selectExam,
  } = usePreviousExamsListStore();

  return (
    <View style={styles.container}>
      <SizedBox height={convertWidth(47)} />
      <TitleBar />
      <SizedBox height={convertWidth(32)} />
      <View style={styles.listContainer}>
        <ScrollView>
          {previousExamsList
            .slice((curPage - 1) * numPerPage, curPage * numPerPage)
            .map((exam, index) => (
              <ListElement
                key={index}
                title={exam.title}
                writer={exam.writer}
                onPress={() => {
                  selectExam(exam.id);
                  navigation.navigate("previous-exams/read");
                }}
              />
            ))}
        </ScrollView>
      </View>
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
    height: convertHeight(570),
  },
});

export { PreviousExamsPage };

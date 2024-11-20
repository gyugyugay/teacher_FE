import { COLOR_BLACK, COLOR_PRIMARY_LIGHT, COLOR_WHITE, convertWidth } from "@/src/shared";
import { StyleSheet, Text, View } from "react-native";

function PageIndexBar({
  totPage,
  curPage,
  setCurPage,
}: {
  totPage: number;
  curPage: number;
  setCurPage: (page: number) => void;
}) {
  return (
    <View style={styles.container}>
      {Array.from(
        { length: Math.min(totPage, 9) },
        (v, i) => i + Math.max(curPage - Math.floor(Math.min(totPage, 9) / 2), 1)
      ).map((index) => {
        return (
          <Text
            key={index}
            style={curPage === index ? styles.indexSelected : styles.index}
            onPress={() => setCurPage(index)}
          >
            {index}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: convertWidth(382),
    flexDirection: "row",
    justifyContent: "center",
  },

  index: {
    fontSize: 10,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_BLACK,

    width: convertWidth(25),
    aspectRatio: 1,
    backgroundColor: COLOR_WHITE,

    textAlign: "center",
    textAlignVertical: "center",

    borderRadius: 100,

    marginHorizontal: convertWidth(7),
  },
  indexSelected: {
    fontSize: 10,
    fontFamily: "Pretendard-SemiBold",
    color: COLOR_WHITE,

    width: convertWidth(25),
    aspectRatio: 1,
    backgroundColor: COLOR_PRIMARY_LIGHT,

    textAlign: "center",
    textAlignVertical: "center",

    borderRadius: 100,

    marginHorizontal: convertWidth(7),
  },
});

export { PageIndexBar };

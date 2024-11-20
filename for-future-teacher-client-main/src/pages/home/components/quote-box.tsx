import { COLOR_PRIMARY_DARK, COLOR_WHITE, convertHeight, convertWidth } from "@/src/shared";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const quotes = [
  {
    quote:
      "성공은 꿈꾸는 자가 이룰 수 있는 특권이다. 그 꿈을 현실로 바꾸는 열정과 노력이 필요하다.",
    author: "마이클 조던",
  },
  {
    quote: "위대한 성취는 결코 쉽게 오지 않는다. 꾸준한 도전과 끈기가 필요한 여정이다.",
    author: "헬렌 켈러",
  },
  {
    quote: "행동 없는 꿈은 허상일 뿐이다. 작은 한 걸음이 큰 변화를 만든다.",
    author: "스티브 잡스",
  },
  { quote: "지금 흘리는 땀은 미래에 빛나는 성과가 된다.", author: "데이비드 베컴" },
  {
    quote: "실패는 성공을 향한 디딤돌이다. 두려워하지 말고 다시 도전하라.",
    author: "토마스 에디슨",
  },
  { quote: "포기하지 않는 사람만이 진정한 승리를 경험할 수 있다.", author: "마더 테레사" },
  {
    quote: "작은 변화가 큰 성과로 이어진다. 매일의 노력이 성공을 만든다.",
    author: "앤드류 카네기",
  },
  { quote: "목표가 분명하다면, 실패는 성공의 한 과정일 뿐이다.", author: "아리스토텔레스" },
  { quote: "위대한 사람은 한 번 실패하더라도 결코 포기하지 않는다.", author: "나폴레옹 힐" },
  { quote: "도전하지 않는 자에게는 기회가 오지 않는다.", author: "엘론 머스크" },
  { quote: "현재의 고난은 미래의 성공을 위한 투자다.", author: "세르게이 브린" },
  { quote: "좋아하는 일을 찾고 그 안에서 최고의 길을 찾아라.", author: "마크 저커버그" },
  { quote: "성공은 준비된 자에게 온다. 배우고 준비하라.", author: "리처드 브랜슨" },
  { quote: "포기하지 않고 한 걸음 더 나아가면 꿈은 현실이 된다.", author: "오프라 윈프리" },
  { quote: "위대한 목표를 가진 사람은 작은 실패에 흔들리지 않는다.", author: "넬슨 만델라" },
  { quote: "자신을 믿고 계속 나아가라. 의심은 오히려 걸림돌이 될 뿐이다.", author: "테레사 메이" },
  { quote: "성공은 남보다 빠르게가 아닌, 지속적으로 나아가는 자의 것이다.", author: "윈스턴 처칠" },
  { quote: "오늘의 도전이 내일의 기적을 만든다.", author: "마하트마 간디" },
  { quote: "실패는 두려워할 것이 아니라 배움의 기회로 삼아라.", author: "피터 드러커" },
  { quote: "진정으로 원하는 목표는 쉽게 포기하지 않는다.", author: "빌 게이츠" },
];

function QuoteBox() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  useFocusEffect(
    useCallback(() => {
      setQuoteIdx(Math.floor(Math.random() * quotes.length));
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quotes[quoteIdx].quote}</Text>
      <Text style={styles.authorText}>-{quotes[quoteIdx].author}-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertWidth(358),
    height: convertHeight(237),
    backgroundColor: COLOR_PRIMARY_DARK,

    borderRadius: convertWidth(7),

    padding: convertWidth(25),
    justifyContent: "space-between",
  },

  quoteText: {
    fontSize: 18,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,

    lineHeight: convertHeight(30),
  },

  authorText: {
    fontSize: 18,
    fontFamily: "Pretendard-Medium",
    color: COLOR_WHITE,

    textAlign: "right",
  },
});

export { QuoteBox };

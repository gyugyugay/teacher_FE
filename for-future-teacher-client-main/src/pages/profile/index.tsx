import { useUserStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT_30,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
  NavProp,
  setUserToken,
} from "@/src/shared";
import { confirmAlert, HeadlineTextBox, HorizontalDivider, SizedBox } from "@/src/widgets";
import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

function ProfilePage() {
  const navigation = useNavigation<NavProp<"main/index">>();
  const {
    init: profileInit,
    problems,
    nickname,
    phoneNumber,
    email,
    name,
    tryDeleteAccount,
  } = useUserStore();

  useFocusEffect(
    useCallback(() => {
      profileInit();
    }, [])
  );

  return (
    <View style={styles.container}>
      <SizedBox height={convertWidth(47)} />
      <View style={styles.titleBar}>
        <HeadlineTextBox title="프로필" />
      </View>
      <SizedBox height={convertWidth(27)} />
      <View style={styles.problemBox}>
        <Text style={styles.subTitle}>맞은 문제</Text>
        <SizedBox height={convertWidth(12)} />
        <View style={styles.problemListRow}>
          {problems.correct.map((problem, index) => (
            <Text key={index} style={styles.correctProblem}>
              {problem}
            </Text>
          ))}
        </View>
      </View>
      <SizedBox height={convertWidth(26)} />
      <View style={styles.problemBox}>
        <Text style={styles.subTitle}>틀린 문제</Text>
        <SizedBox height={convertWidth(12)} />
        <View style={styles.problemListRow}>
          {problems.incorrect.map((problem, index) => (
            <Text key={index} style={styles.wrongProblem}>
              {problem}
            </Text>
          ))}
        </View>
      </View>
      <SizedBox height={convertWidth(26)} />
      <HorizontalDivider width={convertWidth(380)} />
      <SizedBox height={convertWidth(12)} />
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>내 정보</Text>
        <SizedBox height={convertWidth(19)} />
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>아이디</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <SizedBox height={convertWidth(19)} />
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>이름</Text>
          <Text style={styles.infoText}>{name}</Text>
        </View>
        <SizedBox height={convertWidth(19)} />
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>전화번호</Text>
          <Text style={styles.infoText}>{phoneNumber}</Text>
        </View>
        <SizedBox height={convertWidth(19)} />
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>닉네임</Text>
          <Text style={styles.infoText}>{nickname}</Text>
        </View>
      </View>
      <SizedBox height={convertWidth(26)} />
      <HorizontalDivider width={convertWidth(380)} />
      <SizedBox height={convertWidth(12)} />
      <Pressable
        style={styles.buttonBar}
        onPress={() => {
          confirmAlert({
            text: "로그아웃 하시겠습니까?",
            onConfirm: async () => {
              setUserToken({ accessToken: null });
              navigation.navigate("auth/index");
            },
          });
        }}
      >
        <Text style={styles.buttonText}>로그아웃</Text>
      </Pressable>
      <Pressable
        style={styles.buttonBar}
        onPress={() => {
          confirmAlert({
            text: "서비스에서 탈퇴 하시겠습니까?",
            onConfirm: async () => {
              tryDeleteAccount().then((res) => {
                if (!res) return;
                setUserToken({ accessToken: null });
                navigation.navigate("auth/index");
              });
            },
          });
        }}
      >
        <Text style={styles.buttonText}>회원탈퇴</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  titleBar: {
    width: convertWidth(380),
  },

  subTitle: {
    fontSize: 18,
    fontFamily: "Pretendard-Medium",
    color: COLOR_BLACK,

    width: convertWidth(380),
  },

  problemBox: {
    width: convertWidth(380),
  },

  problemListRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  correctProblem: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,

    width: convertWidth(38),
    height: convertWidth(17),
    borderRadius: convertWidth(7),
    backgroundColor: COLOR_PRIMARY_LIGHT_30,

    textAlign: "center",
    textAlignVertical: "center",

    marginRight: convertWidth(8),
    marginBottom: convertWidth(8),
  },

  wrongProblem: {
    fontSize: 11,
    fontFamily: "Pretendard-Light",
    color: COLOR_WHITE,

    width: convertWidth(38),
    height: convertWidth(17),
    borderRadius: convertWidth(7),
    backgroundColor: COLOR_PRIMARY_DARK,

    textAlign: "center",
    textAlignVertical: "center",

    marginRight: convertWidth(8),
    marginBottom: convertWidth(8),
  },

  infoBox: {
    width: convertWidth(380),
    alignItems: "center",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: convertWidth(360),
  },

  infoText: {
    fontSize: 13,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,
  },

  buttonBar: {
    justifyContent: "center",

    width: convertWidth(360),
    height: convertHeight(50),
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Pretendard-Regular",
    color: COLOR_BLACK,
  },
});

export { ProfilePage };

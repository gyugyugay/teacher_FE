import { useSignUpStore } from "@/src/features";
import {
  COLOR_BLACK,
  COLOR_BLACK_30,
  COLOR_PRIMARY_LIGHT,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { ConfirmButton, HorizontalDivider, SizedBox } from "@/src/widgets";
import { Linking, StyleSheet, Text, View } from "react-native";

import Checkbox from "expo-checkbox";

function TermsOfService() {
  const { setStep, termsOfService, isTermsOfServiceChecked, setTermsOfService } = useSignUpStore();
  return (
    <View style={styles.container}>
      <View style={styles.checkRow}>
        <Checkbox
          value={isTermsOfServiceChecked}
          onValueChange={(value) => {
            setTermsOfService(0, value);
            setTermsOfService(1, value);
          }}
          color={COLOR_PRIMARY_LIGHT}
        />
        <SizedBox width={convertWidth(10)} />
        <Text style={styles.termTitleText}>전체 동의</Text>
      </View>

      <SizedBox height={convertHeight(30)} />

      <View style={styles.checkRow}>
        <Checkbox
          value={termsOfService[0]}
          onValueChange={(value) => {
            setTermsOfService(0, value);
          }}
          color={COLOR_PRIMARY_LIGHT}
        />
        <SizedBox width={convertWidth(10)} />
        <Text style={styles.termTitleText}>서비스 이용약관</Text>
        <View style={{ flex: 1 }} />
        <Text
          style={styles.termTitleText}
          onPress={() => {
            Linking.openURL("https://jjunysong.notion.site/8a1d171b40a54742b6c4f1309a4984da");
          }}
        >{`자세히 >`}</Text>
      </View>
      <SizedBox height={convertHeight(14)} />

      <View style={styles.checkRow}>
        <Checkbox
          value={termsOfService[1]}
          onValueChange={(value) => {
            setTermsOfService(1, value);
          }}
          color={COLOR_PRIMARY_LIGHT}
        />
        <SizedBox width={convertWidth(10)} />
        <Text style={styles.termTitleText}>개인정보 처리방침</Text>
        <View style={{ flex: 1 }} />
        <Text
          style={styles.termTitleText}
          onPress={() => {
            Linking.openURL("https://jjunysong.notion.site/32710b42b4fe4f2abd7619809d4e2322");
          }}
        >{`자세히 >`}</Text>
      </View>
      <SizedBox height={convertHeight(14)} />

      <SizedBox height={convertHeight(14)} />
      <HorizontalDivider width={convertWidth(333)} />
      <SizedBox height={convertHeight(14)} />
      <ConfirmButton
        text="다음"
        disabled={!isTermsOfServiceChecked}
        onConfirm={() => {
          setStep(1);
        }}
        width={convertWidth(348)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: convertWidth(430),
  },

  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    width: convertWidth(348),
  },

  termTitleText: {
    fontSize: 13,
    fontFamily: "Pretendard-Light",
    color: COLOR_BLACK,
  },
});

export { TermsOfService };

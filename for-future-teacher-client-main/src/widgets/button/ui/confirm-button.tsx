import {
  COLOR_BLACK,
  COLOR_BLACK_30,
  COLOR_PRIMARY_LIGHT,
  COLOR_WHITE,
  convertHeight,
  convertWidth,
} from "@/src/shared";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

const ConfirmButtonConfig = {
  animatinonConfig: {
    duration: 300,
    easing: Easing.bezier(0.1, 0.71, 0.37, 0.9),
  },
  backgroundColor: {
    enabled: COLOR_BLACK,
    disabled: COLOR_WHITE,
  },
  borderColor: {
    enabled: COLOR_BLACK,
    disabled: COLOR_BLACK_30,
  },
  textColor: {
    enabled: COLOR_PRIMARY_LIGHT,
    disabled: COLOR_BLACK_30,
  },
};

function ConfirmButton({
  text,
  disabled = false,
  onConfirm,
  width,
}: {
  text: string;
  disabled?: boolean;
  onConfirm: () => void;
  width: number;
}) {
  const backgroundColor = useSharedValue(
    ConfirmButtonConfig.backgroundColor[disabled ? "disabled" : "enabled"]
  );
  const borderColor = useSharedValue(
    ConfirmButtonConfig.borderColor[disabled ? "disabled" : "enabled"]
  );
  const textColor = useSharedValue(
    ConfirmButtonConfig.textColor[disabled ? "disabled" : "enabled"]
  );

  useEffect(() => {
    if (disabled) {
      backgroundColor.value = withTiming(
        ConfirmButtonConfig.backgroundColor["disabled"],
        ConfirmButtonConfig.animatinonConfig
      );
      borderColor.value = withTiming(
        ConfirmButtonConfig.borderColor["disabled"],
        ConfirmButtonConfig.animatinonConfig
      );
      textColor.value = withTiming(
        ConfirmButtonConfig.textColor["disabled"],
        ConfirmButtonConfig.animatinonConfig
      );
    } else {
      backgroundColor.value = withTiming(
        ConfirmButtonConfig.backgroundColor["enabled"],
        ConfirmButtonConfig.animatinonConfig
      );
      borderColor.value = withTiming(
        ConfirmButtonConfig.borderColor["enabled"],
        ConfirmButtonConfig.animatinonConfig
      );
      textColor.value = withTiming(
        ConfirmButtonConfig.textColor["enabled"],
        ConfirmButtonConfig.animatinonConfig
      );
    }
  }, [disabled]);

  return (
    <Pressable onPress={disabled ? null : onConfirm}>
      <Animated.View style={[styles.container, { backgroundColor, borderColor, width }]}>
        <Animated.Text style={[styles.text, { color: textColor }]}>{text}</Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: convertHeight(50),

    borderRadius: convertWidth(7),

    justifyContent: "center",
    alignItems: "center",

    borderWidth: convertWidth(1),
  },

  text: {
    fontSize: 18,
    fontFamily: "Pretendard-SemiBold",
  },
});

export { ConfirmButton };

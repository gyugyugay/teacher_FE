import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

type RootStackParamList = {
  "splash/index": undefined;
  "auth/index": undefined;
  "auth/sign-up": undefined;
  "auth/find-id": undefined;
  "auth/find-password": undefined;
  "main/index": undefined;
  "question-board/write": undefined;
  "question-board/read": undefined;
  "previous-exams/read": undefined;
  "quiz/read": undefined;
  "quiz/write": undefined;
};

type ScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

type NavProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  Screen
>;

export type { RootStackParamList, ScreenProps, NavProp };

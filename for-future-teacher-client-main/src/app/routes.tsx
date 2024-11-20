import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AuthPage,
  FindIdPage,
  FindPasswordPage,
  MainPage,
  PreviousExamsReadPage,
  QuestionBoardReadPage,
  QuestionBoardWritePage,
  QuizReadPage,
  QuizWritePage,
  SignUpPage,
  SplashPage,
} from "@/src/pages";
import { RootStackParamList } from "@/src/shared";

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootLayout() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="splash/index" component={SplashPage} />
      <RootStack.Screen name="auth/index" component={AuthPage} />
      <RootStack.Screen name="auth/sign-up" component={SignUpPage} />
      <RootStack.Screen name="auth/find-id" component={FindIdPage} />
      <RootStack.Screen name="auth/find-password" component={FindPasswordPage} />
      <RootStack.Screen name="main/index" component={MainPage} />
      <RootStack.Screen name="question-board/write" component={QuestionBoardWritePage} />
      <RootStack.Screen name="question-board/read" component={QuestionBoardReadPage} />
      <RootStack.Screen name="previous-exams/read" component={PreviousExamsReadPage} />
      <RootStack.Screen name="quiz/write" component={QuizWritePage} />
      <RootStack.Screen name="quiz/read" component={QuizReadPage} />
    </RootStack.Navigator>
  );
}

export { RootLayout };

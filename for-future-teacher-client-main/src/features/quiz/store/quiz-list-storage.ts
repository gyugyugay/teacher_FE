import { getQuizListAPI } from "@/src/entities";
import { calcDifficulty } from "@/src/shared";
import { create } from "zustand";

type State = {
  quizList: Array<{
    id: number;
    title: string;
    writer: string;
    difficulty: "신규" | "상" | "중" | "하";
    updatedAt: Date;
    previousExam: "기출" | "비기출";
  }>;

  page: {
    curPage: number;
    totPage: number;
    numPerPage: number;
  };
};

const defaultState: State = {
  quizList: [],

  page: {
    curPage: 1,
    totPage: 8,
    numPerPage: 6,
  },
};

type Action = {
  init: () => void;
  setCurPage: (page: number) => void;
};

const useQuizListStore = create<State & Action>((set) => ({
  ...defaultState,

  //actions
  init: async () => {
    const res = await getQuizListAPI();
    const quizList = res.map((quiz) => ({
      id: quiz.question_id,
      title: quiz.title,
      writer: quiz.nickname,
      difficulty: calcDifficulty(quiz.totalCorrectPeopleNum, quiz.totalPeopleNum),
      updatedAt: new Date(quiz.updatedAt),
      previousExam: (quiz.isPastExam ? "기출" : "비기출") as "기출" | "비기출",
    }));
    quizList.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    set({ quizList });
  },

  setCurPage: (curPage: number) => set({ page: { ...defaultState.page, curPage } }),
}));

export { useQuizListStore };

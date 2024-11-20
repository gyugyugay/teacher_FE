import { checkAnswerAPI, deleteQuizAPI, getAnswerAPI, getQuizAPI } from "@/src/entities";
import { create } from "zustand";

type State = {
  id: number;
  title: string;
  writer: string;
  date: Date;
  previousExam: "기출" | "비기출";
  problem: string;
  choices: Array<string>;

  selectedChoice: number;

  isCorrect: boolean;
  explanation: string;
};

const defaultState: State = {
  id: 0,
  title: "",
  writer: "",
  date: new Date(),
  previousExam: "기출",
  problem: "",
  choices: ["", "", "", ""],

  selectedChoice: -1,

  isCorrect: false,
  explanation: "",
};

type Action = {
  init: ({ id, previousExam }: { id: number; previousExam: "기출" | "비기출" }) => Promise<boolean>;
  setSelectedChoice: (idx: number) => void;
  deleteQuiz: () => Promise<boolean>;
  checkAnswer: () => Promise<boolean>;
};

const useQuizReadStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: async ({ id, previousExam }: { id: number; previousExam: "기출" | "비기출" }) => {
    const res = await getQuizAPI(id);
    if (res === null) return false;
    set({
      ...defaultState,
      id,
      title: res.title,
      writer: res.nickname,
      date: new Date(res.updatedAt),
      previousExam,
      problem: res.content,
      choices: res.options.map((option) => option.content),
      selectedChoice: -1,
    });
    return true;
  },
  setSelectedChoice: (idx: number) => {
    set({ selectedChoice: idx });
  },
  deleteQuiz: async () => {
    return deleteQuizAPI(get().id);
  },

  checkAnswer: async () => {
    const isCorrect = await checkAnswerAPI(get().id, get().selectedChoice + 1);
    if (!isCorrect) {
      set({ selectedChoice: -1 });
      return false;
    }

    const answer = await getAnswerAPI(get().id);
    set({ isCorrect, explanation: answer.commentary });
    return true;
  },
}));

export { useQuizReadStore };

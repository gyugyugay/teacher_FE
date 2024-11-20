import { getAnswerAPI, modifyQuizAPI, postQuizAPI } from "@/src/entities";
import { validateContent, validateTitle } from "@/src/shared";
import { create } from "zustand";

type State = {
  quizId: number;
  title: string;
  problem: string;
  previousExam: "기출" | "비기출";
  choices: Array<string>;
  answer: number;
  explanation: string;

  isSumbitable: boolean;
  isModification: boolean;
};

const defaultState: State = {
  quizId: 0,
  title: "",
  problem: "",
  previousExam: "기출",
  choices: ["", "", "", ""],
  answer: 1,
  explanation: "",

  isSumbitable: false,
  isModification: false,
};

type Action = {
  init(): void;
  initModification({
    quizId,
    title,
    problem,
    previousExam,
    choices,
  }: {
    quizId: number;
    title: string;
    problem: string;
    previousExam: "기출" | "비기출";
    choices: Array<string>;
  }): Promise<boolean>;
  setTitle: (title: string) => void;
  setProblem: (problem: string) => void;
  setPreviousExam: (previousExam: "기출" | "비기출") => void;
  setChoice: (idx: number, choice: string) => void;
  addChoice: () => void;
  setAnswer: (answer: number) => void;
  setExplanation: (explanation: string) => void;
  trySubmit: () => Promise<boolean>;
};

const useQuizWriteStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => {
    set({ ...defaultState, choices: ["", "", "", ""] });
  },
  initModification: async ({ quizId, title, problem, previousExam, choices }) => {
    const { answers, commentary } = await getAnswerAPI(quizId);
    if (answers === "" || commentary === "") return false;

    set({
      ...defaultState,
      quizId,
      title,
      problem,
      previousExam,
      choices,
      isSumbitable: true,
      isModification: true,
      answer: parseInt(answers),
      explanation: commentary,
    });

    return true;
  },
  setTitle: (title: string) => {
    const isSumbitable =
      validateTitle(title) &&
      validateContent(get().problem) &&
      get().choices.every((choice) => validateContent(choice)) &&
      validateContent(get().explanation);

    set({ title, isSumbitable });
  },
  setProblem: (problem: string) => {
    const isSumbitable =
      validateTitle(get().title) &&
      validateContent(problem) &&
      get().choices.every((choice) => validateContent(choice)) &&
      validateContent(get().explanation);

    set({ problem, isSumbitable });
  },
  setPreviousExam: (previousExam: "기출" | "비기출") => {
    set({ previousExam });
  },
  setChoice: (idx: number, choice: string) => {
    const choices = get().choices;
    choices[idx] = choice;

    const isSumbitable =
      validateTitle(get().title) &&
      validateContent(get().problem) &&
      choices.every((choice) => validateContent(choice)) &&
      validateContent(get().explanation);

    set({ choices, isSumbitable });
  },
  addChoice: () => {
    const choices = get().choices;
    choices.push("");

    set({ choices });
  },
  setAnswer: (answer: number) => {
    set({ answer });
  },
  setExplanation: (explanation: string) => {
    const isSumbitable =
      validateTitle(get().title) &&
      validateContent(get().problem) &&
      get().choices.every((choice) => validateContent(choice)) &&
      validateContent(explanation);

    set({ explanation, isSumbitable });
  },

  trySubmit: async () => {
    if (!get().isSumbitable) return false;

    if (get().isModification) {
      return modifyQuizAPI({
        questionId: get().quizId,
        title: get().title,
        content: get().problem,
        isPastExam: get().previousExam === "기출",
        options: get().choices.map((content, idx) => ({
          number: idx + 1,
          content,
        })),
        answer: get().answer,
        commentary: get().explanation,
      });
    } else {
      return postQuizAPI({
        title: get().title,
        content: get().problem,
        isPastExam: get().previousExam === "기출",
        options: get().choices.map((content, idx) => ({
          number: idx + 1,
          content,
        })),
        answer: get().answer,
        commentary: get().explanation,
      });
    }
  },
}));

export { useQuizWriteStore };

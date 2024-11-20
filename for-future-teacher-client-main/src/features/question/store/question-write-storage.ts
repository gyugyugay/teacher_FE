import { postPostAPI } from "@/src/entities";
import { validateContent, validateTitle } from "@/src/shared";
import { create } from "zustand";

type State = {
  title: string;
  content: string;

  isSubmitPossible: boolean;
};

const defaultState: State = {
  title: "",
  content: "",

  isSubmitPossible: false,
};

type Action = {
  init: () => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  tryWrite: () => Promise<boolean>;
};

const useQuestionWriteStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => {
    set(defaultState);
  },
  setTitle: (title: string) => {
    const isSubmitPossible = validateTitle(title) && validateContent(get().content);
    set((state) => ({ title, isSubmitPossible }));
  },
  setContent: (content: string) => {
    const isSubmitPossible = validateTitle(get().title) && validateContent(content);
    set((state) => ({ content, isSubmitPossible }));
  },
  tryWrite: async () => {
    if (!get().isSubmitPossible) return false;
    return await postPostAPI({
      title: get().title,
      content: get().content,
    });
  },
}));

export { useQuestionWriteStore };

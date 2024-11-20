import { deleteUserAPI, getUserAnswerInfoAPI, getUserInfoAPI } from "@/src/entities";
import { create } from "zustand";

type State = {
  nickname: string;
  phoneNumber: string;
  email: string;
  name: string;

  problems: {
    correct: Array<number>;
    incorrect: Array<number>;
  };
};

const defaultState: State = {
  nickname: "",
  phoneNumber: "",
  email: "",
  name: "",

  problems: {
    correct: [],
    incorrect: [],
  },
};

type Action = {
  init: () => Promise<boolean>;
  tryDeleteAccount: () => Promise<boolean>;
};

const useUserStore = create<State & Action>((set) => ({
  ...defaultState,

  // actions
  init: async () => {
    const problems = await getUserAnswerInfoAPI();

    const { nickname, phoneNumber, email, name } = (await getUserInfoAPI()) ?? {};
    if (nickname === undefined) return false;

    set({
      nickname,
      phoneNumber,
      email,
      name,
      problems,
    });
    return true;
  },

  tryDeleteAccount: async () => {
    return await deleteUserAPI();
  },
}));

export { useUserStore };

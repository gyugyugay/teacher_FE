import { trySignInAPI } from "@/src/entities";
import { validatePassword, validateUserId } from "@/src/shared";
import { create } from "zustand";

type State = {
  id: string;
  password: string;

  isLoginPossible: boolean;
};

const defaultState: State = {
  id: "",
  password: "",
  isLoginPossible: false,
};

type Action = {
  init(): void;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  trySignIn: () => Promise<boolean>;
};

const useSignInStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => set(defaultState),
  setId: (id: string) => {
    set({ id, isLoginPossible: validateUserId(id) && validatePassword(get().password) });
  },
  setPassword: (password: string) => {
    set({ password, isLoginPossible: validateUserId(get().id) && validatePassword(password) });
  },
  trySignIn: async () => {
    if (!get().isLoginPossible) return false;
    const res = await trySignInAPI({ email: get().id, password: get().password });
    return res;
  },
}));

export { useSignInStore };

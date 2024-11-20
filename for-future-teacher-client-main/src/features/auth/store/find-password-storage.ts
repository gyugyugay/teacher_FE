import { resetPasswordAPI } from "@/src/entities";
import { validateName, validateUserId } from "@/src/shared";
import { create } from "zustand";

type State = {
  name: string;
  id: string;

  result: boolean | null;

  isFindPasswordPossible: boolean;
};

const defaultState: State = {
  name: "",
  id: "",

  result: null,

  isFindPasswordPossible: false,
};

type Action = {
  init: () => void;
  setName: (name: string) => void;
  setId: (id: string) => void;
  tryFindPassword: () => Promise<boolean>;
};

const useFindPasswordStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => set(defaultState),
  setName: (name) => {
    const isFindPasswordPossible = validateName(name) && validateUserId(get().id);
    set({ name, isFindPasswordPossible });
  },
  setId: (id) => {
    const isFindPasswordPossible = validateName(get().name) && validateUserId(id);
    set({ id, isFindPasswordPossible });
  },
  tryFindPassword: async () => {
    if (!get().isFindPasswordPossible) return false;

    return await resetPasswordAPI({ email: get().id, name: get().name }).then((res) => {
      if (!res) return false;
      set({ result: true });
      return true;
    });
  },
}));

export { useFindPasswordStore };

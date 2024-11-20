import { findEmailAPI } from "@/src/entities";
import { validateName, validatePhoneNumber } from "@/src/shared";
import { create } from "zustand";

type State = {
  name: string;
  phone: string;

  result: string | null;

  isFindIdPossible: boolean;
};

const defaultState: State = {
  name: "",
  phone: "",

  result: null,

  isFindIdPossible: false,
};

type Action = {
  init: () => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  tryFindId: () => Promise<boolean>;
};

const useFindIdStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => set(defaultState),
  setName: (name) => {
    const isFindIdPossible = validateName(name) && validatePhoneNumber(get().phone);
    set({ name, isFindIdPossible });
  },
  setPhone: (phone) => {
    const isFindIdPossible = validateName(get().name) && validatePhoneNumber(phone);
    set({ phone, isFindIdPossible });
  },
  tryFindId: async () => {
    if (!get().isFindIdPossible) return false;
    return await findEmailAPI({ name: get().name, phoneNumber: get().phone }).then((res) => {
      if (res === null) return false;
      set({ result: res });
      return true;
    });
  },
}));

export { useFindIdStore };

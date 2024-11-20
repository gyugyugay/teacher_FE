import {
  checkEmailDuplicateAPI,
  checkNicknameDuplicateAPI,
  checkPhoneNumberDuplicateAPI,
  trySignUpAPI,
} from "@/src/entities";
import {
  validateName,
  validateNickname,
  validatePassword,
  validatePhoneNumber,
  validateUserId,
} from "@/src/shared";
import { create } from "zustand";

type State = {
  step: number;
  termsOfService: Array<boolean>;

  id: string;
  nickname: string;
  phone: string;
  name: string;
  password: string;
  passwordCheck: string;

  isIdDuplicated: boolean;
  isPhoneDuplicated: boolean;
  isNicknameDuplicated: boolean;

  isTermsOfServiceChecked: boolean;
  isPasswordConfirmed: number; // 0 : not checked, 1 : confirmed, -1 : not confirmed
  isSignUpPossible: boolean;
};

const defaultState: State = {
  step: 0,
  termsOfService: [false, false],

  id: "",
  nickname: "",
  phone: "",
  name: "",
  password: "",
  passwordCheck: "",

  isIdDuplicated: false,
  isPhoneDuplicated: false,
  isNicknameDuplicated: false,

  isTermsOfServiceChecked: false,
  isPasswordConfirmed: 0,
  isSignUpPossible: false,
};

type Action = {
  init: () => void;
  setStep: (step: number) => void;
  setTermsOfService: (idx: number, val: boolean) => void;
  setId: (id: string) => void;
  setNickname: (nickname: string) => void;
  setPhone: (phone: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setPasswordCheck: (passwordCheck: string) => void;

  trySignUp: () => Promise<number>;
};

const useSignUpStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: () => set(defaultState),
  setStep: (step) => set({ step }),
  setTermsOfService: (idx, val) => {
    const termsOfService = get().termsOfService;
    termsOfService[idx] = val;
    const isTermsOfServiceChecked = termsOfService.every((val) => val);

    set({ termsOfService, isTermsOfServiceChecked });
  },
  setId: (id) => {
    const isSignUpPossible =
      validateUserId(id) &&
      validateNickname(get().nickname) &&
      validatePhoneNumber(get().phone) &&
      validateName(get().name) &&
      validatePassword(get().password) &&
      get().isPasswordConfirmed !== -1;

    set({ id, isSignUpPossible, isIdDuplicated: false });
  },
  setNickname: (nickname) => {
    const isSignUpPossible =
      validateUserId(get().id) &&
      validateNickname(nickname) &&
      validatePhoneNumber(get().phone) &&
      validateName(get().name) &&
      validatePassword(get().password) &&
      get().isPasswordConfirmed !== -1;

    set({ nickname, isSignUpPossible, isNicknameDuplicated: false });
  },
  setPhone: (phone) => {
    const isSignUpPossible =
      validateUserId(get().id) &&
      validateNickname(get().nickname) &&
      validatePhoneNumber(phone) &&
      validateName(get().name) &&
      validatePassword(get().password) &&
      get().isPasswordConfirmed !== -1;

    set({ phone, isSignUpPossible, isPhoneDuplicated: false });
  },
  setName: (name) => {
    const isSignUpPossible =
      validateUserId(get().id) &&
      validateNickname(get().nickname) &&
      validatePhoneNumber(get().phone) &&
      validateName(name) &&
      validatePassword(get().password) &&
      get().isPasswordConfirmed !== -1;
    set({ name, isSignUpPossible });
  },
  setPassword: (password) => {
    const isSignUpPossible =
      validateUserId(get().id) &&
      validateNickname(get().nickname) &&
      validatePhoneNumber(get().phone) &&
      validateName(get().name) &&
      validatePassword(password) &&
      get().isPasswordConfirmed !== -1;
    set({ password, isSignUpPossible });
  },
  setPasswordCheck: (passwordCheck) => {
    const isPasswordConfirmed =
      passwordCheck.length === 0 ? 0 : get().password === passwordCheck ? 1 : -1;
    const isSignUpPossible =
      validateUserId(get().id) &&
      validateNickname(get().nickname) &&
      validatePhoneNumber(get().phone) &&
      validateName(get().name) &&
      validatePassword(get().password) &&
      isPasswordConfirmed !== -1;

    set({ passwordCheck: passwordCheck, isSignUpPossible, isPasswordConfirmed });
  },

  trySignUp: async () => {
    if (!get().isSignUpPossible) return -1;

    const isIdPossible = await checkEmailDuplicateAPI(get().id).then((res) => {
      if (!res) set({ isIdDuplicated: true });
      return res;
    });
    const isPhonenumberPossible = await checkPhoneNumberDuplicateAPI(get().phone).then((res) => {
      if (!res) set({ isPhoneDuplicated: true });
      return res;
    });
    const isNicknamePossible = await checkNicknameDuplicateAPI(get().nickname).then((res) => {
      if (!res) set({ isNicknameDuplicated: true });
      return res;
    });

    if (!isIdPossible || !isPhonenumberPossible || !isNicknamePossible) {
      set({ isSignUpPossible: false });
      return -1;
    }

    const res = (await trySignUpAPI({
      nickname: get().nickname,
      password: get().password,
      phoneNumber: get().phone,
      email: get().id,
      name: get().name,
    }))
      ? 1
      : 0;

    return res;
  },
}));

export { useSignUpStore };

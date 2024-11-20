import { ImageSourcePropType } from "react-native";
import { create } from "zustand";

type State = {
  previousExamsList: Array<{
    id: number;
    title: string;
    writer: string;
    src: ImageSourcePropType;
  }>;

  selectedExam: {
    id: number;
    title: string;
    writer: string;
    src: ImageSourcePropType | null;
  };

  page: {
    curPage: number;
    totPage: number;
    numPerPage: number;
  };
};

const defaultState: State = {
  previousExamsList: [
    {
      id: 1,
      title: "2024년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2024.jpg"),
    },
    {
      id: 2,
      title: "2023년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2023.jpg"),
    },
    {
      id: 3,
      title: "2022년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2022.jpg"),
    },
    {
      id: 4,
      title: "2021년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2021.jpg"),
    },
    {
      id: 5,
      title: "2020년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2020.jpg"),
    },
    {
      id: 6,
      title: "2019년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2019.jpg"),
    },
    {
      id: 7,
      title: "2018년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2018.jpg"),
    },
    {
      id: 8,
      title: "2017년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2017.jpg"),
    },
    {
      id: 9,
      title: "2016년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2016.jpg"),
    },
    {
      id: 10,
      title: "2015년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2015.jpg"),
    },
    {
      id: 11,
      title: "2014년 교육학 기출문제",
      writer: "관리자",
      src: require("@/src/shared/assets/images/previous-exams/2014.jpg"),
    },
  ],

  selectedExam: {
    id: 0,
    title: "",
    writer: "",
    src: null,
  },

  page: {
    curPage: 1,
    totPage: 3,
    numPerPage: 5,
  },
};

type Action = {
  init: () => void;

  selectExam: (id: number) => void;

  setCurPage: (page: number) => void;
};

const usePreviousExamsListStore = create<State & Action>((set) => ({
  ...defaultState,

  //actions
  init: () => {
    set(defaultState);
  },
  selectExam: (id) => {
    const selectedExam = defaultState.previousExamsList.find((exam) => exam.id === id);
    if (selectedExam) {
      set({ selectedExam });
    }
  },
  setCurPage: (page) => {
    set((state) => ({
      page: {
        ...state.page,
        curPage: page,
      },
    }));
  },
}));

export { usePreviousExamsListStore };

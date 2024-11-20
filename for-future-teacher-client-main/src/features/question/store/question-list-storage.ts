import { getAllPostsAPI } from "@/src/entities";
import { create } from "zustand";

type State = {
  questionList: Array<{
    id: number;
    title: string;
    writer: string;
    date: Date;
  }>;

  page: {
    curPage: number;
    totPage: number;
    numPerPage: number;
  };
};

const defaultState: State = {
  questionList: [],
  page: {
    curPage: 1,
    totPage: 12,
    numPerPage: 4,
  },
};

type Action = {
  init(): void;

  setCurPage(page: number): void;
};

const useQuestionListStore = create<State & Action>((set) => ({
  ...defaultState,

  //actions
  init: () => {
    getAllPostsAPI().then((res) => {
      if (res === null) return;
      res.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      set({
        ...defaultState,
        questionList: res.map((post) => {
          return {
            id: post.postId,
            title: post.title,
            writer: post.nickname,
            date: new Date(post.updatedAt),
          };
        }),
      });
    });
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

export { useQuestionListStore };

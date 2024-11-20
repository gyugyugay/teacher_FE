import { deleteCommentAPI, getCommentsAPI, getPostAPI, postCommentAPI } from "@/src/entities";
import { create } from "zustand";

type State = {
  postId: number;
  title: string;
  content: string;

  writer: string;
  writerId: number;
  writtenDate: Date;

  comments: Array<{
    commentId: number;
    writer: string;
    writerId: number;
    content: string;
    writtenDate: Date;
  }>;

  commentInput: string;
};

const defaultState: State = {
  postId: 0,
  title: "",
  content: "",

  writer: "",
  writerId: 0,
  writtenDate: new Date(),

  comments: [],

  commentInput: "",
};

type Action = {
  init: ({ postId }: { postId: number }) => Promise<boolean>;
  setCommentInput: (commentInput: string) => void;
  postComment: () => void;
  deleteComment: ({ commentId }: { commentId: number }) => void;
};

const useQuestionReadStore = create<State & Action>((set, get) => ({
  ...defaultState,

  //actions
  init: async ({ postId }: { postId: number }) => {
    //post정보 가져오기
    const { title, content, writer, writerId, writtenDate } = (await getPostAPI({ postId })) ?? {};
    if (!title) return false;

    //코멘트 정보 가져오기
    const comments = await getCommentsAPI({ postId });
    if (!comments) return false;

    set({ ...defaultState, postId, title, content, writer, writerId, writtenDate, comments });

    return true;
  },

  setCommentInput: (commentInput: string) => {
    set({ commentInput });
  },

  postComment: () => {
    if (get().commentInput.length == 0) return;
    postCommentAPI({ postId: get().postId, content: get().commentInput }).then((res) => {
      if (!res) return;
      getCommentsAPI({ postId: get().postId }).then((comments) => {
        if (!comments) return;
        set({ comments, commentInput: "" });
      });
    });
  },

  deleteComment: ({ commentId }: { commentId: number }) => {
    deleteCommentAPI({ commentId }).then((res) => {
      if (!res) return;
      getCommentsAPI({ postId: get().postId }).then((comments) => {
        if (!comments) return;
        set({ comments });
      });
    });
  },
}));

export { useQuestionReadStore };

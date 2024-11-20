import { fetchAPI } from "../auth/api/middleware";

async function getUserInfoAPI(): Promise<{
  nickname: string;
  phoneNumber: string;
  email: string;
  name: string;
} | null> {
  return fetchAPI({
    path: "mypage",
    method: "GET",
  });
}

async function getUserAnswerInfoAPI(): Promise<{
  correct: Array<number>;
  incorrect: Array<number>;
}> {
  return fetchAPI({
    path: "mypage/answers",
    method: "GET",
  }).then((res) => {
    if (res === null) return { correct: [], incorrect: [] };
    return res;
  });
}

async function deleteUserAPI(): Promise<boolean> {
  return fetchAPI({
    path: "mypage",
    method: "DELETE",
  }).then((res) => {
    return res ?? false;
  });
}

export { getUserInfoAPI, getUserAnswerInfoAPI, deleteUserAPI };

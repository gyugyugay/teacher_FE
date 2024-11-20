import { fetchAPI } from "../auth/api/middleware";

async function getQuizListAPI(): Promise<
  Array<{
    nickname: string;
    question_id: number;
    title: string;
    totalCorrectPeopleNum: number;
    totalPeopleNum: number;
    updatedAt: string;
    isPastExam: boolean;
  }>
> {
  return fetchAPI({
    path: "questions",
    method: "GET",
  }).then((res) => {
    if (res === null) return [];
    return res;
  });
}

async function postQuizAPI({
  title,
  content,
  isPastExam,
  options,
  answer,
  commentary,
}: {
  title: string;
  content: string;
  isPastExam: boolean;
  options: Array<{
    number: number;
    content: string;
  }>;
  answer: number;
  commentary: string;
}): Promise<boolean> {
  return fetchAPI({
    path: "questions",
    method: "POST",
    body: {
      questionDto: {
        title,
        content,
        questionType: options.length === 4 ? "Choices4" : "Choices5",
        isPastExam,
        image: "",
      },
      optionDtos: options,
      answerDto: {
        answers: `${answer}`,
        image: "",
        commentary,
      },
    },
  }).then((res) => res !== null);
}

async function modifyQuizAPI({
  questionId,
  title,
  content,
  isPastExam,
  options,
  answer,
  commentary,
}: {
  questionId: number;
  title: string;
  content: string;
  isPastExam: boolean;
  options: Array<{
    number: number;
    content: string;
  }>;
  answer: number;
  commentary: string;
}): Promise<boolean> {
  return fetchAPI({
    path: `questions/${questionId}`,
    method: "PUT",
    body: {
      questionDto: {
        title,
        content,
        questionType: options.length === 4 ? "Choices4" : "Choices5",
        isPastExam,
        image: "",
      },
      optionDtos: options,
      answerDto: {
        answers: `${answer}`,
        image: "",
        commentary,
      },
    },
  }).then((res) => res !== null);
}

async function getQuizAPI(questionId: number): Promise<{
  content: string;
  nickname: string;
  options: Array<{ content: string; number: number }>;
  title: string;
  updatedAt: string;
} | null> {
  return fetchAPI({
    path: `questions/${questionId}`,
    method: "GET",
  });
}

async function deleteQuizAPI(questionId: number): Promise<boolean> {
  return fetchAPI({
    path: `questions/${questionId}`,
    method: "DELETE",
  }).then((res) => res !== null);
}

async function checkAnswerAPI(question_id: number, answer: number): Promise<boolean> {
  return fetchAPI({
    path: `questions/${question_id}`,
    method: "POST",
    body: {
      answers: [answer],
    },
  }).then((res) => res ?? true);
}

async function getAnswerAPI(question_id: number): Promise<{
  answers: string;
  subjectiveAnswer: string;
  image: string;
  commentary: string;
}> {
  return fetchAPI({
    path: `questions/answer/${question_id}`,
    method: "GET",
  }).then(
    (res) =>
      res ?? {
        answers: "",
        subjectiveAnswer: "",
        image: "",
        commentary: "",
      }
  );
}

export {
  getQuizListAPI,
  postQuizAPI,
  modifyQuizAPI,
  getQuizAPI,
  deleteQuizAPI,
  checkAnswerAPI,
  getAnswerAPI,
};

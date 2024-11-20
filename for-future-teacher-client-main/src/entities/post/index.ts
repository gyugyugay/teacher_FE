import { fetchAPI } from "../auth/api/middleware";

async function getAllPostsAPI(): Promise<Array<{
  postId: number;
  title: string;
  nickname: string;
  userId: number;
  updatedAt: Date;
}> | null> {
  return fetchAPI({
    path: "posts",
    method: "GET",
  });
}

async function postPostAPI({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<boolean> {
  return fetchAPI({
    path: "posts",
    method: "POST",
    body: {
      title,
      content,
    },
  }).then((res) => res !== null);
}

async function getPostAPI({ postId }: { postId: number }): Promise<{
  title: string;
  content: string;
  writer: string;
  writerId: number;
  writtenDate: Date;
} | null> {
  return fetchAPI({
    path: `posts/${postId}`,
    method: "GET",
  }).then((res) => {
    if (res === null) return null;
    return {
      title: res.title,
      content: res.content,
      writer: res.nickname,
      writerId: res.userId,
      writtenDate: new Date(res.lastModifiedAt),
    };
  });
}

export { getAllPostsAPI, postPostAPI, getPostAPI };

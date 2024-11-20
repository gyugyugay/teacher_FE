import { fetchAPI } from "../auth/api/middleware";

async function getCommentsAPI({ postId }: { postId: number }): Promise<Array<{
  commentId: number;
  writer: string;
  writerId: number;
  content: string;
  writtenDate: Date;
}> | null> {
  return fetchAPI({
    path: `comment/${postId}`,
    method: "GET",
  }).then((res) => {
    if (!res) return null;
    return res.map(
      (comment: {
        author: string;
        author_id: number;
        comment_id: number;
        content: string | null;
        create_time: "string";
      }) => ({
        commentId: comment.comment_id,
        writer: comment.author,
        writerId: comment.author_id,
        content: comment.content ?? "",
        writtenDate: new Date(comment.create_time),
      })
    );
  });
}

async function postCommentAPI({
  postId,
  content,
}: {
  postId: number;
  content: string;
}): Promise<boolean> {
  return fetchAPI({
    path: `comment/${postId}`,
    method: "POST",
    body: { comment: content },
  }).then((res) => {
    return res ?? false;
  });
}

async function deleteCommentAPI({ commentId }: { commentId: number }): Promise<boolean> {
  return fetchAPI({
    path: `comment/${commentId}`,
    method: "DELETE",
  }).then((res) => {
    return res ?? false;
  });
}

export { getCommentsAPI, postCommentAPI, deleteCommentAPI };

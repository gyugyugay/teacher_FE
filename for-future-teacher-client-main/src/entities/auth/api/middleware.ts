import { getUserToken, logError, logInfo, setUserToken } from "@/src/shared";

async function fetchAPI({
  method,
  path,
  params,
  body,
  headers,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: object;
  path: string;
  body?: object;
  headers?: object;
  enableAuth?: boolean;
}) {
  //요청
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/${path}`);
  logInfo(`http [${method}] ${url}`);
  url.search = new URLSearchParams({ ...params }).toString();

  //토큰 가져오기
  const token = await getUserToken();
  if (token === null) {
    logError("accessToken is null");
    return null;
  }

  //결과
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (res.status !== 200) {
    logError(`${method} ${url} ${res.status}`);
    return null;
  }

  return res.json().catch(() => true);
}

export { fetchAPI };

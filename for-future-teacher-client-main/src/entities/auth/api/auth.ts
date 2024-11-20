import { logError, logInfo, setUserToken } from "@/src/shared";
import { fetchAPI } from "./middleware";

async function trySignUpAPI({
  nickname,
  password,
  phoneNumber,
  email,
  name,
}: {
  nickname: string;
  password: string;
  phoneNumber: string;
  email: string;
  name: string;
}): Promise<boolean> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/join`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      password,
      phoneNumber,
      email,
      name,
    }),
  });

  if (res.status === 200) {
    return true;
  } else {
    logError(`${url} ${res.status}`);
    return false;
  }
}

async function trySignInAPI({ email, password }: { email: string; password: string }) {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/login`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (res.status !== 200) {
    logError(`${url} ${res.status}`);
    return false;
  }

  return res.json().then((data) => {
    setUserToken({ accessToken: data.token });
    return true;
  });
}

async function findEmailAPI({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}): Promise<string | null> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/findEmail`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phoneNumber,
    }),
  });

  if (res.status !== 200) {
    logError(`${url} ${res.status}`);
    return null;
  }

  return res.json().then((data) => {
    return data.email;
  });
}

async function resetPasswordAPI({
  email,
  name,
}: {
  email: string;
  name: string;
}): Promise<boolean> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/resetPassword`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
    }),
  });

  if (res.status !== 200) {
    logError(`${url} ${res.status}`);
    return false;
  }

  return true;
}

async function checkEmailDuplicateAPI(email: string): Promise<boolean> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/check/email`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (res.status !== 200) {
    return false;
  }

  return res.json().then((data) => {
    return !data.isDuplicate;
  });
}

async function checkPhoneNumberDuplicateAPI(phoneNumber: string): Promise<boolean> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/check/phoneNumber`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber,
    }),
  });

  if (res.status !== 200) {
    logError(`${url} ${res.status}`);
    return false;
  }

  return res.json().then((data) => {
    return !data.isDuplicate;
  });
}

async function checkNicknameDuplicateAPI(nickname: string): Promise<boolean> {
  const url = new URL(`${process.env.EXPO_PUBLIC_SERVER_URL!}/auth/check/nickname`);

  logInfo(`http [POST] ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname,
    }),
  });

  if (res.status !== 200) {
    logError(`${url} ${res.status}`);
    return false;
  }

  return res.json().then((data) => {
    return !data.isDuplicate;
  });
}

export {
  trySignUpAPI,
  trySignInAPI,
  findEmailAPI,
  resetPasswordAPI,
  checkEmailDuplicateAPI,
  checkPhoneNumberDuplicateAPI,
  checkNicknameDuplicateAPI,
};

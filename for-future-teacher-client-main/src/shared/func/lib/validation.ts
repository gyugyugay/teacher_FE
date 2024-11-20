function validateUserId(id: string): boolean {
  // 이메일 형식인지 확인
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegExp.test(id);
}

function validatePassword(password: string): boolean {
  return password.length > 0;
}

function validateNickname(nickname: string): boolean {
  return nickname.length > 0;
}

function validatePhoneNumber(phone: string): boolean {
  const phoneRegExp = /^\d{3}\d{3,4}\d{4}$/;
  return phoneRegExp.test(phone);
}

function validateName(name: string): boolean {
  return name.length > 0;
}

function validateTitle(title: string): boolean {
  return title.length > 0;
}

function validateContent(content: string): boolean {
  return content.length > 0;
}

export {
  validateUserId,
  validatePassword,
  validateNickname,
  validatePhoneNumber,
  validateName,
  validateTitle,
  validateContent,
};

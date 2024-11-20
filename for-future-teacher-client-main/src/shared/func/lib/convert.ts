function convertDateMMDDHHMM(date: Date): string {
  return `${date.getMonth() + 1}. ${date.getDate()}. ${date.getHours()}:${date.getMinutes()}`;
}

function calcDifficulty(
  totalCorrectPeopleNum: number,
  totalPeopleNum: number
): "신규" | "상" | "중" | "하" {
  if (totalPeopleNum <= 5) return "신규";
  const correctRate = totalCorrectPeopleNum / totalPeopleNum;
  if (correctRate >= 0.7) return "하";
  if (correctRate >= 0.4) return "중";
  return "상";
}

export { convertDateMMDDHHMM, calcDifficulty };

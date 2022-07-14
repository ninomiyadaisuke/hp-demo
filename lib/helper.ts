import { Data, Card } from "./types";

export const returnCodeToBr = (text: string): string => {
  if (text === "") {
    return text;
  } else {
    return text.replace(/\r?\n/g, "<br/>");
  }
};

export const deformation = (data: Data[]) => {
  const arry = [] as Card[];
  data &&
    data.map(data => {
      data.cards.map(card => {
        arry.push(card);
      });
    });
  return arry;
};

export const shuffleArray = function (array: any[]) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log("shuffled");

  return array;
};

import {Data,Card} from './types';

export const returnCodeToBr = (text: string): string => {
  if (text === '') {
    return text
  } else {
    return text.replace(/\r?\n/g, '<br/>')
  }
}

export const deformation = (data: Data[]) => {
  const arry = [] as Card[];
  data &&
    data.map((data) => {
      data.cards.map((card) => {
        arry.push(card);
      });
    });
  return arry;
};
import { Data, Card, FirebaseTimestampType } from './types';

export const returnCodeToBr = (text: string): string => {
  if (text === '') {
    return text;
  } else {
    return text.replace(/\r?\n/g, '<br/>');
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

export const dateToString = (dt: Date): string => {
  return dt.getFullYear() + '-' + ('00' + (dt.getMonth() + 1)).slice(-2) + '-' + ('00' + dt.getDate()).slice(-2);
};

export const timestampToDateString = (timestamp: FirebaseTimestampType): string => {
  const dt = new Date(timestamp.seconds * 1000);
  return dateToString(dt);
};

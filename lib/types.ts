import { DocumentData, Timestamp } from 'firebase/firestore';

export type Card = {
  id: string;
  icon: string;
  title: string;
  discription: string;
};

export type Data = {
  id: string;
  map: string;
  text: string;
  cards: Card[];
};

export type FirebaseTimestampType = Timestamp;

export type NewsFetchedType = {
  id: string;
  data: DocumentData;
};

export type NewsItemsType = {
  id: string;
  textNews: string;
  timestamp: string;
};

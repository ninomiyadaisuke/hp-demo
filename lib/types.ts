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
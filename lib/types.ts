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

export type ConcertCardType = {
  id?: string;
  srcImg: string;
  altImg: string;
  widthImg: number;
  heightImg: number;
  titleArticle: string;
  textArticle: string;
  bigArticle?: boolean;
  link?: boolean
};

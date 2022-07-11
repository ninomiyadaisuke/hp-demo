import React, { FC } from "react";
import { ConcertCardType } from "../../../lib/types";

import ConcertCard from "./ConcertCard";

const ConcertArticleItem: FC<ConcertCardType> = props => {
  const {
    id,
    srcImg,
    altImg,
    titleArticle,
    textArticle,
    widthImg,
    heightImg,
    bigArticle,
  } = props;

  return (
    <li>
      <ConcertCard
        id={id}
        srcImg={srcImg}
        altImg={altImg}
        titleArticle={titleArticle}
        textArticle={textArticle}
        widthImg={widthImg}
        heightImg={heightImg}
        bigArticle={bigArticle}
      />
    </li>
  );
};

export default ConcertArticleItem;

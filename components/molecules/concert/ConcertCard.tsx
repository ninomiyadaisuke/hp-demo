import Image from "next/image";
import React, { FC } from "react";
import { ConcertCardType } from "../../../lib/types";
import MenuLinks from "../../atoms/MenuLink";
import Text from "../../atoms/Text";

import styles from "./../../../styles/molecules/concert_article_item.module.scss";

const ConcertCard: FC<ConcertCardType> = props => {
  const {
    srcImg,
    altImg,
    titleArticle,
    textArticle,
    widthImg,
    heightImg,
    bigArticle,
    link,
  } = props;

  const bigArticleClass = !bigArticle
    ? styles.concert
    : [styles["concert"], styles["big_article"]].join(" ");

  return (
    <div className={bigArticleClass}>
      <div className={styles.concert__image}>
        <Image
          src={srcImg}
          width={widthImg}
          height={heightImg}
          alt={altImg}
          objectFit="cover"
        />
      </div>
      <div className={styles.concert__text}>
        <div className={styles.concert__text_title}>
          <h2>{titleArticle}</h2>
        </div>
        <div className={styles.concert__text_description}>
          <Text text={textArticle} />
        </div>
        {link && (
          <div className={styles.concert__reservation_link}>
            <MenuLinks
              text="ご予約・予約状況のご確認はこちら"
              type={"toReservation"}
              path="/"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcertCard;

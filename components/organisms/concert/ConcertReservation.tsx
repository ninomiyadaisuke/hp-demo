import React from "react";
import ConcertCard from "../../molecules/concert/ConcertCard";

import styles from "./../../../styles/organisms/concert_reservation.module.scss";

const ConcertReservation = () => {
  return (
    <section className={styles.top}>
      <ConcertCard
        srcImg="/live_house_reservation.png"
        altImg="concert reservation image"
        titleArticle="コンサートホールの予約方法について説明を掲載します。"
        textArticle="コンサートホールの予約方法について説明・概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
            <br/><br/>ここに何か文章を掲載します。ここに何か文章を掲載します。"
        widthImg={965}
        heightImg={653}
        bigArticle={true}
        link={true}
      />
    </section>
  );
};

export default ConcertReservation;

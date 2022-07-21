import Image from "next/image";
import React from "react";
import Title from "../../atoms/Title";

import styles from "./../../../styles/organisms/cafe_concept.module.scss";

const CafeConcept = () => {
  return (
    <section className={styles.concept}>
      <div className={styles.concept__image}>
        <Image
          src="/cafe/cafe-concept.jpg"
          objectFit="cover"
          layout="fill"
          alt="pics of coffee"
        />
      </div>
      <div className={styles.concept__text}>
        <div className={styles.concept__text_title}>
          <Title title="Cafe concept" />
        </div>
        <p className={styles.concept__text_description}>
          概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
          <br />
          ここに何か文章を掲載します。ここに何か文章を掲載します。
        </p>
        <div className={styles.concept__text_appeal}>
          スペック表記
          <ul>
            <li>席数</li>
            <li>その他アピールポイント</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CafeConcept;

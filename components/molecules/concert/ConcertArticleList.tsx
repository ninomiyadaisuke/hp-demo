import React from "react";
import { DUMMY_CONCERT } from "../../../lib/data";
import ConcertArticleItem from "./ConcertArticleItem";

import styles from "./../../../styles/molecules/concert_articles_list.module.scss";

const ConcertArticleList = () => {
  let content = <p>no concert</p>;
  if (DUMMY_CONCERT.length > 0) {
    content = (
      <>
        {DUMMY_CONCERT.map((item: any) => (
          <ConcertArticleItem
            key={item.id}
            id={item.id}
            srcImg={item.srcImg}
            altImg={item.altImg}
            widthImg={541}
            heightImg={653}
            titleArticle={item.titleArticle}
            textArticle={item.textArticle}
          />
        ))}
      </>
    );
  }

  return (
    <div className={styles.concert}>
      <h2 className={styles.concert__title}>
        セールスコピーを掲載します。コンサートホールを使用してこのようなことをしてみてはいかがでしょうか？
      </h2>
      <ul className={styles.concert__list}>{content}</ul>
    </div>
  );
};

export default ConcertArticleList;

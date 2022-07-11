import React from "react";
import { DUMMY_CONCERT_INFOS } from "../../../lib/data";
import ConcertArticleItem from "./ConcertArticleItem";

import styles from "./../../../styles/molecules/concert_info_list.module.scss";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import useBreakpoint from "use-breakpoint";

const ConcertInfoList = () => {
  const { desktop } = useBreakPoint();
  useBreakpoint;
  let sliceDatas = desktop
    ? DUMMY_CONCERT_INFOS.slice(0, 8)
    : DUMMY_CONCERT_INFOS.slice(0, 4);

  let content = <p>no concert</p>;

  if (DUMMY_CONCERT_INFOS.length > 0) {
    content = (
      <>
        {sliceDatas.map((item: any) => (
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
        セールスコピーを掲載します。コンサートホールの設備を紹介します。
      </h2>
      <ul className={styles.concert__list}>{content}</ul>
    </div>
  );
};

export default ConcertInfoList;

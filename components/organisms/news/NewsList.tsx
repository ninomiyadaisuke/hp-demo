import React, { FC, Fragment, useMemo, useState } from "react";
import Pagination from "../../atoms/Pagination";
import NewsCard from "../../atoms/NewsCard";
import NewsItem from "../../molecules/news/NewsItem";

import styles from "./../../../styles/organisms/news_list.module.scss";
import { DUMMY_NEWS } from "../../../lib/data";
import Text from "../../atoms/Text";

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const onPageSize = (event: any) => {
    const target = (event.target as HTMLSelectElement).value;
    setPageSize(Number(target));
    setCurrentPage(1);
  };

  const currentNewsDatas = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return DUMMY_NEWS.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, DUMMY_NEWS, pageSize]);

  let content = <p>現在お知らせがありません</p>;
  if (DUMMY_NEWS.length > 0) {
    content = (
      <ul className={styles["news__list-container"]}>
        {currentNewsDatas.map((item: any) => (
          <NewsItem key={item.id} id={item.id} timestamp={item.timestamp} textNews={item.text} />
        ))}
      </ul>
    );
  }

  return (
    <Fragment>
      <div className={styles.news}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 135">
          <text
            id="news"
            data-name="news"
            transform="translate(226 46)"
            fill="#444"
            fontSize="60"
            fontFamily="Helvetica"
          >
            <tspan x="-78.398" y="0">
              お知らせ
            </tspan>
          </text>
        </svg>
        <div className={styles["news__pagination"]}>
          <div className={styles["news__select"]}>
            <label htmlFor="pageSize">
              <Text text={"お知らせ"} />
            </label>
            <select name="pageSize" value={pageSize} id="pageSize" onChange={onPageSize}>
              <option value="5">5 </option>
              <option value="10">10 </option>
              <option value="15">15 </option>
              <option value="20">20 </option>
            </select>
          </div>
          <Pagination
            className={styles["news__pagination-bar"]}
            currentPage={currentPage}
            totalCount={DUMMY_NEWS.length}
            pageSize={pageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
            siblingCount={1}
            test="top"
          />
        </div>
        <div className={styles.news__list}>
          <NewsCard>{content}</NewsCard>
        </div>
        <Pagination
          className={styles["news__pagination-bar"]}
          currentPage={currentPage}
          totalCount={DUMMY_NEWS.length}
          pageSize={pageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
          siblingCount={1}
          test="bottom"
        />
      </div>
    </Fragment>
  );
};

export default NewsList;

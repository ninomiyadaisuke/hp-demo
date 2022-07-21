import React from "react";
import FileDownloadBtn from "../../atoms/FileDownloadBtn";

import styles from "./../../../styles/organisms/cafe_swiper.module.scss";

import CafeSwiperList from "../../molecules/caffe/CafeSwiperList";

const CafeSwiper = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__button}>
        <FileDownloadBtn text="Cafe" showTitle={false} />
      </div>
      <div className={styles.section__swiper}>
        <CafeSwiperList width={400} height={750} />
      </div>
    </section>
  );
};

export default CafeSwiper;

import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import BusinessHoursConcert from "../../atoms/BusinessHoursConcert";
import CafeSwiperList from "../../molecules/caffe/CafeSwiperList";

import styles from "./../../../styles/organisms/caffe_letter_top.module.scss";

const CaffeLetterTop = () => {
  const { mobile } = useBreakPoint();

  return (
    <section className={styles.section__top}>
      <div className={styles.section__top_bgImg}>
        <div className={styles.section__top_container}>
          <div className={styles.section__top_container_slider}>
            <CafeSwiperList width={559} height={353} oneSlide={true} />
          </div>
          <div className={styles.section__top_container_text}>
            <h1 className={styles.section__top_container_text_title}>caffe letter</h1>
            <p>
              概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
              <br />
              ここに何か文章を掲載します。ここに何か文章を掲載します。
            </p>

            {mobile ? (
              <BusinessHoursConcert
                businessHide={true}
                dayOffHide={false}
                schedulesAlign={true}
              />
            ) : (
              <div className={styles.section__top_container_text_hours}>
                <p>営業時間の記載</p>
                <div>
                  <div>
                    <span>平日</span>
                    <span>11:00 〜 18:00</span>
                  </div>
                  <div>
                    <span>土・日・祝</span>
                    <span>11:00 〜 18:00</span>
                  </div>
                  <div>
                    <span>定休日</span>
                    <span>毎週火曜日</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.section__top_scroll}>
        <IoIosArrowDown />
      </div>
    </section>
  );
};

export default CaffeLetterTop;

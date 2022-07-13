import React from "react";
import BusinessHoursConcert from "../../atoms/BusinessHoursConcert";
import BarPresentation from "../../molecules/bar/BarPresentation";

import styles from "./../../../styles/organisms/bars_top.module.scss";

const BarsTop = () => {
  const onigiriDescription = (
    <p>
      概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
      <br />
      ここに何か文章を掲載します。ここに何か文章を掲載します。
    </p>
  );
  const juiceDescription = (
    <p>
      概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
      <br />
      ここに何か文章を掲載します。ここに何か文章を掲載します。
    </p>
  );

  return (
    <section className={styles.top}>
      <div className={styles.top__bgImg}></div>
      <div className={styles.top__presentation}>
        <BarPresentation
          img={"/bar/bar-onigiri.svg"}
          altImg={"three onigiri"}
          titleOne={"玄米おにぎり"}
          titleTwo={"ひとやすみ"}
          description={onigiriDescription}
          type1={true}
        />
        <BarPresentation
          img={"/bar/delight-logo.svg"}
          altImg={"bunch of juice"}
          titleOne={"Juice Bar"}
          titleTwo={"Delight"}
          description={juiceDescription}
          type1={true}
        />
      </div>
      <div className={styles.top__hours}>
        <div className={styles.top__hours_mobile}>
          <BusinessHoursConcert dayOff={true} />
        </div>
        <div className={styles.top__hours_desktop}>
          <p>営業時間の記載</p>
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
    </section>
  );
};

export default BarsTop;

import { FC } from "react";
import Image from "next/image";
import TitleTextHours from "../../molecules/common/TitleTextHours";
import BusinessHours from "../../atoms/BusinessHours";
import MenuLinks from "../../atoms/MenuLink";

import styles from "../../../styles/organisms/concert_top.module.scss";

const ConcertTop: FC = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__container}>
        <div className={styles.top__text}>
          <div className={styles.top__text_block}>
            <TitleTextHours
              title="pure soul"
              subTitle="Live Space"
              text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
              nonHours={true}
            />
          </div>
          <div className={styles.top__image}>
            <Image src={"/concert-holl.jpg"} alt={""} width={860} height={880} objectFit={"cover"} />
          </div>
          <div className={styles.top__hours}>
            <BusinessHours />
          </div>
          <div className={styles.top__link}>
            <MenuLinks text="ご予約・予約状況のご確認はこちら" type={"toAbout"} path="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcertTop;

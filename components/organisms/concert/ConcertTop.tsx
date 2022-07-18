import { FC } from "react";
import Image from "next/image";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import BusinessHoursConcert from "../../atoms/BusinessHoursConcert";
import MenuLinks from "../../atoms/MenuLink";

import styles from "../../../styles/organisms/concert_top.module.scss";

const ConcertTop: FC = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__text}>
        <div className={styles.top__text_title}>
          <Title title="pure soul" subTitle="Live Space" />
        </div>
        <div className={styles.top__text_description}>
          <Text
            text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。
              <br/><br/>ここに何か文章を掲載します。ここに何か文章を掲載します"
          />
        </div>
      </div>
      <div className={styles.top__image}>
        <Image
          src={"/concert/live_house_top.jpg"}
          alt={""}
          width={1124}
          height={820}
          objectFit={"cover"}
          // layout="fill"
        />
      </div>
      <div className={styles.top__info}>
        <div className={styles.top__info_hours}>
          <BusinessHoursConcert />
        </div>
        <div className={styles.top__info_link}>
          <MenuLinks
            text="ご予約・予約状況のご確認はこちら"
            type={"toReservation"}
            path="/"
          />
        </div>
      </div>
    </section>
  );
};

export default ConcertTop;

import { FC } from "react";
import Image from "next/image";
import Text from "../../atoms/Text";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import BusinessHours from "../../atoms/BusinessHours";
import TitleTextHours from "../../molecules/common/TitleTextHours";

import styles from "../../../styles/organisms/restaurant_top.module.scss";

const RestaurantTop: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.top}>
      <div className={styles.top__text}>
      <TitleTextHours
      title="present"
      text="概要説明欄。セレクトショップであることの説明。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
      fontColor="black"
    />
      </div>
      <div className={styles.top__image}>
        <Image
          src={"/restaurant.jpg"}
          alt={"restaurant image"}
          height={mobile ? 550 : 880}
          width={mobile ? 380 : 900}
          objectFit={"cover"}
          priority
        />
      </div>
    </section>
  );
};

export default RestaurantTop;

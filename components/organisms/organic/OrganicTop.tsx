import { FC } from "react";
import Image from "next/image";
import TitleTextHours from "../../molecules/common/TitleTextHours";
import Title from "../../atoms/Title";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import styles from "../../../styles/organisms/organic_top.module.scss";

const OrganicTop: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.top}>
      {mobile && (
        <div className={styles.top__title}>
          <Title title="acoustic" subTitle="marche" />
        </div>
      )}
      <div className={styles.top__images}>
        <div className={styles.top__image}>
          <Image
            src={"/organic1.jpg"}
            alt={"organic image"}
            height={283}
            width={860}
            objectFit={"cover"}
          />
        </div>
        <div className={styles.top__image}>
          <Image
            src={"/organic2.jpg"}
            alt={"organic image"}
            height={283}
            width={860}
            objectFit={"cover"}
            priority
          />
        </div>
        <div className={styles.top__image}>
          <Image
            src={"/organic3.jpg"}
            alt={"organic image"}
            height={283}
            width={860}
            objectFit={"cover"}
            priority
          />
        </div>
      </div>
      <div className={styles.top__container}>
        <TitleTextHours
          nonTitle={mobile ? true : false}
          fontColor='white'
          title="acoustic"
          subTitle="marche"
          text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
        />
      </div>
    </section>
  );
};

export default OrganicTop;

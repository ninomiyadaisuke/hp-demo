import { FC } from "react";
import Image from "next/image";
import TitleTextHours from "../../molecules/common/TitleTextHours";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import styles from "../../../styles/organisms/organic_concept.module.scss";

const OrganicConcept: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.concept}>
      <div className={styles.concept__container_top}>
        <div className={styles.concept__image}>
          <Image
            src={"/organicshop.jpg"}
            alt={"organic shop image"}
            width={mobile ? 800 : 860}
            height={mobile ? 800 : 451}
          />
        </div>
        <div className={styles.concept__text_top}>
          <TitleTextHours
            nonHours={true}
            title="concept"
            text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
        </div>
      </div>
      <div className={styles.concept__container}>
        <div className={styles.concept__image}>
          <Image
            src={"/coffee.jpg"}
            alt={"organic shop image"}
            width={mobile ? 800 : 860}
            height={mobile ? 800 : 688}
          />
        </div>
        <div className={styles.concept__text}>
          <TitleTextHours
            nonHours={true}
            title="産直マーケット"
            text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
        </div>
      </div>
      <div className={styles.concept__container}>
        <div className={styles.concept__image}>
          <Image
            src={"/apples.jpg"}
            alt={"organic shop image"}
            width={mobile ? 800 : 860}
            height={mobile ? 800 : 688}
            priority
          />
        </div>
        <div className={styles.concept__text_row}>
          <TitleTextHours
            nonHours={true}
            title="量り売り"
            text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
        </div>
      </div>
      <div className={styles.concept__container_bottom}>
        <div className={styles.concept__image}>
          <Image
            src={"/peppers.jpg"}
            alt={"organic shop image"}
            width={mobile ? 800 : 860}
            height={mobile ? 800 : 688}
          />
        </div>
        <div className={styles.concept__text}>
          <TitleTextHours
            nonHours={true}
            title="オーガニックストア"
            text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganicConcept;

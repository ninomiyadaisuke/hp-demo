import { FC } from "react";
import Image from "next/image";
import Text from "../../atoms/Text";

import styles from "../../../styles/molecules/gallery_concept.module.scss";

const GalleryConcept: FC = () => {
  return (
    <section className={styles.concept}>
      <div className={styles.concept__container}>
        <div className={styles.concept__text}>
          <h2>concept</h2>
          <Text text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。" />
        </div>
      </div>
      <div className={styles.concept__image}>
        <Image
          src={"/shop.jpg"}
          alt={"shop image"}
          height={880}
          width={860}
          objectFit={"cover"}
          priority
        />
      </div>
    </section>
  );
};

export default GalleryConcept;

import { FC } from "react";
import Image from "next/image";
import TitleTextHours from "../../molecules/common/TitleTextHours";
import ToEcButton from "../../atoms/ToEcButton";

import styles from "../../../styles/organisms/gallery_top.module.scss";

const GalleryTop: FC = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__image}>
        <Image
          src={"/shop1.jpg"}
          alt={"shop image"}
          height={880}
          width={860}
          objectFit={"cover"}
          priority
        />
      </div>
      <div className={styles.top__container}>
        <div className={styles.top__text}>
          <TitleTextHours
            title="present"
            subTitle="gallery"
            text="概要説明欄。セレクトショップであることの説明。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
          <ToEcButton />
        </div>
      </div>
    </section>
  );
};

export default GalleryTop;

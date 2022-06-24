import { FC } from "react";
import Image from "next/image";

import styles from '../../../styles/organisms/gallery_top.module.scss'

const GalleryTop: FC = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__image}>
        <Image
          src={"/zakka.jpg"}
          alt={"zakka"}
          width={860}
          height={880}
          objectFit={"cover"}
        />
      </div>
    </section>
  );
};

export default GalleryTop;

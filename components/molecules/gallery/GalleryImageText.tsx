import { FC } from "react";
import Image from "next/image";

import styles from "../../../styles/molecules/gallery_image_text.module.scss";

type Props = {
  type: "left" | "right";
  path: string;
  title: string;
  subTitle: string;
  text: string;
};

const GalleryImageText: FC<Props> = (props) => {
  const { type = "right", path, title, subTitle, text } = props;
  const left = type === "left";
  return (
    <div className={styles.imagetext}>
      <div
        className={
          left ? styles.imagetext__image : styles.imagetext__image_right
        }
      >
        <Image src={path} alt={"gallery image"} width={708} height={487} objectFit={'cover'} />
      </div>
      <div
        className={
          left ? styles.imagetext__container : styles.imagetext__container_left
        }
      >
        <div className={styles.imagetext__text}>
          <div className={styles.imagetext__title}>
            <h3>{title}</h3>
            <h3>{subTitle}</h3>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImageText;

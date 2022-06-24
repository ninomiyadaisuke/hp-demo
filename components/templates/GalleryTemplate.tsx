import { FC } from "react";
import GalleryTop from "../organisms/gallery/GalleryTop";

import styles from "../../styles/templates/gallery_template.module.scss";

const GalleryTemplate: FC = () => {
  return (
    <article className={styles.gallery}>
      <GalleryTop />
    </article>
  );
};

export default GalleryTemplate;

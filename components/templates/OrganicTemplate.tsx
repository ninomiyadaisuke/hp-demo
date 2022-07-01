import { FC } from "react";
import OrganicTop from "../organisms/organic/OrganicTop";
import OrganicConcept from "../organisms/organic/OrganicConcept";
import AccessGoogleMap from "../atoms/AccessGoogleMap";
import ImportantPoints from "../atoms/ImportantPoints";
import OrganicImagesText from "../organisms/organic/OrganicImagesText";

import styles from "../../styles/templates/organic_template.module.scss";

const OrganicTemplate: FC = () => {
  return (
    <article className={styles.backgroud}>
      <div className={styles.organic}>
        <OrganicTop />
        <OrganicConcept />
        <OrganicImagesText />
        <AccessGoogleMap />
        <ImportantPoints />
      </div>
    </article>
  );
};

export default OrganicTemplate;

import { FC } from "react";
import ConcertTop from "../organisms/concert/ConcertTop";

import styles from "../../styles/templates/concert_template.module.scss";

const ConcertTemplate: FC = () => {
  return (
    <article className={styles.concert}>
      <ConcertTop />
    </article>
  );
};

export default ConcertTemplate;

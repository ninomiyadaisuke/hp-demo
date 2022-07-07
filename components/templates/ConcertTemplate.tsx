import { FC } from "react";
import ConcertTop from "../organisms/concert/ConcertTop";

import styles from "../../styles/templates/concert_template.module.scss";
import ConcertArticlesTop from "../organisms/concert/ConcertArticlesTop";
import ConcertReservation from "../organisms/concert/ConcertReservation";
import ConcertInfoList from "../molecules/concert/ConcertInfoList";
import ImportantPoints from "../atoms/ImportantPoints";
import Contact from "../organisms/Contact";

const ConcertTemplate: FC = () => {
  return (
    <article className={styles.concert}>
      <ConcertTop />
      <ConcertArticlesTop />
      <ConcertReservation />
      <ConcertInfoList />
      <ImportantPoints />
      <Contact />
    </article>
  );
};

export default ConcertTemplate;

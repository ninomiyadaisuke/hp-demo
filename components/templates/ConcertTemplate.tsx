import { FC } from "react";
import ConcertTop from "../organisms/concert/ConcertTop";
import ConcertArticlesTop from "../organisms/concert/ConcertArticlesTop";
import ConcertReservation from "../organisms/concert/ConcertReservation";
import ConcertInfoList from "../molecules/concert/ConcertInfoList";
import AccessGoogleMap from "../organisms/AccessGoogleMap";
import ImportantPoints from "../atoms/ImportantPoints";
import Contact from "../organisms/Contact";

import styles from "../../styles/templates/concert_template.module.scss";

const ConcertTemplate: FC = () => {
  return (
    <article className={styles.concert}>
      <ConcertTop />
      <ConcertArticlesTop />
      <ConcertReservation />
      <ConcertInfoList />
      <AccessGoogleMap showTitle={false} />
      <ImportantPoints />
      <Contact />
    </article>
  );
};

export default ConcertTemplate;

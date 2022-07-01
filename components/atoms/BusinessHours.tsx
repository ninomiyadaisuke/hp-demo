import { FC } from "react";

import styles from "../../styles/atoms/business_hours.module.scss";

type Props = {
  fontColor?: "black" | "white";
};

const BusinessHours: FC<Props> = (props) => {
  const { fontColor = "black" } = props;
  const black = fontColor === "black";
  return (
    <div className={styles.business}>
      <div className={styles.business__hours}>
        <p className={black ? styles.business__week : styles.business__white}>
          平日
        </p>
        <p className={black ? undefined : styles.business__text_white}>
          11:00 〜 18:00
        </p>
      </div>
      <div className={styles.business__hours}>
        <p className={black ? styles.business__week : styles.business__white}>
          土・日・祝
        </p>
        <p className={black ? undefined : styles.business__text_white}>
          11:00 〜 18:00
        </p>
      </div>
    </div>
  );
};

export default BusinessHours;

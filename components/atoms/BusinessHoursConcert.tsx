import { FC } from "react";

import styles from "../../styles/atoms/business_hours_concert.module.scss";

type Props = {
  fontColor?: "black" | "white";
  dayOff?: boolean;
};

const BusinessHoursConcert: FC<Props> = props => {
  const { fontColor = "black", dayOff } = props;
  const black = fontColor === "black";
  return (
    <div>
      <p>営業時間の記載</p>
      <div className={styles.business}>
        <div className={styles.business__week}>
          <p className={black ? "" : styles.business__white}>平日</p>
          <p className={black ? "" : styles.business__white}>土・日・祝</p>
          {dayOff && <p className={black ? "" : styles.business__white}>定休日</p>}
        </div>
        <div className={styles.business__hours}>
          <p className={black ? undefined : styles.business__text_white}>
            11:00 〜 18:00
          </p>
          <p className={black ? undefined : styles.business__text_white}>
            11:00 〜 18:00
          </p>
          {dayOff && (
            <p className={black ? undefined : styles.business__text_white}>毎週火曜日</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursConcert;

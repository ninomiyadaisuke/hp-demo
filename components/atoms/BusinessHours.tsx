import { FC } from "react";

import styles from "../../styles/atoms/business_hours.module.scss";

const BusinessHours: FC = () => {
  return (
    <div className={styles.business}>
      <div className={styles.business__hours}>
        <p className={styles.business__week}>平日</p>
        <p>11:00 〜 18:00</p>
      </div>
      <div className={styles.business__hours}>
        <p className={styles.business__week}>土・日・祝</p>
        <p>11:00 〜 18:00</p>
      </div>
    </div>
  );
};

export default BusinessHours;

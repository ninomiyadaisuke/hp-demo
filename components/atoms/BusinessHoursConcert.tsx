import { FC } from "react";

import styles from "../../styles/atoms/business_hours_concert.module.scss";

type Props = {
  businessHide?: boolean;
  schedulesAlign?: boolean;
  dayOffHide?: boolean;
};

const BusinessHoursConcert: FC<Props> = props => {
  const { businessHide, schedulesAlign, dayOffHide } = props;
  return (
    <div>
      {!businessHide && <p>営業時間の記載</p>}
      <div className={styles.business}>
        <div
          className={styles[!schedulesAlign ? "business__week" : "business__week_flex"]}
        >
          <p>平日</p>
          <p>土・日・祝</p>
          {!dayOffHide && <p>定休日</p>}
        </div>
        <div
          className={styles[!schedulesAlign ? "business__hour" : "business__hour_flex"]}
        >
          <p>11:00 〜 18:00</p>
          <p>11:00 〜 18:00</p>
          {!dayOffHide && <p>毎週火曜日</p>}
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursConcert;

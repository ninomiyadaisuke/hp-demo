import { FC } from "react";
import { useBreakPoint } from "../../hooks/useBreakPoint";

import styles from "../../styles/organisms/access_map.module.scss";
import Yspacer from "../atoms/Yspacer";

const AccessGoogleMap: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.access__map}>
      <div className={styles.access__map_mapouter}>
        <div className={styles.access__map_gmap_canvas}>
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%E3%80%92820-0067%20%E7%A6%8F%E5%B2%A1%E7%9C%8C%E9%A3%AF%E5%A1%9A%E5%B8%82%E5%B7%9D%E6%B4%A5%EF%BC%95%EF%BC%90%EF%BC%94&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </div>
      <div className={styles.access__map_text}>
        <div>
          <p>
            JR篠栗駅より 〇〇で □□を▷▷分 国道201号線
            <br />
            篠栗北交差点を北へ、道なりに〇〇進み右側 など、アクセス方法を掲載します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessGoogleMap;

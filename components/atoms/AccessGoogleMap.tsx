import { FC } from "react";
import Yspacer from "./Yspacer";
import { useBreakPoint } from "../../hooks/useBreakPoint";

import styles from "../../styles/atoms/access_googlemap.module.scss";

const AccessGoogleMap: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.access}>
      <div className={styles.access__text}>
        <div>
          <h3>Access</h3>
          <p>〒811-2501 福岡県糟屋郡久山町久原１８２２</p>
        </div>
      </div>
      {mobile && <Yspacer spSize={24} />}
      <div className={styles.access__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.667514279705!2d130.5170433155751!3d33.639861946795385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541842937c2dfc5%3A0xe50d6cc4ab978cb5!2z5LmF5bGx5rip5rOJIOODm-ODhuODq-WkouWutg!5e0!3m2!1sja!2sjp!4v1655274026934!5m2!1sja!2sjp"
          loading="lazy"
          frameBorder={0}
        />
      </div>
    </section>
  );
};

export default AccessGoogleMap;

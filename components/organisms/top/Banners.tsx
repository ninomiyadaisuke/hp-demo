import { FC } from "react";
import Banner from "../../molecules/top/Banner";
import { bannersData } from "../../../lib/data";

import styles from "../../../styles/organisms/banners.module.scss";

const Banners: FC = () => {
  const lastIndex = bannersData.length - 1;
  return (
    <section className={styles.banners}>
      {bannersData.map((data, i) => {
        const marginBottom = i === lastIndex
          ? styles.banners__last
          : styles.banners__list;
        return (
          <div className={marginBottom} key={data.id}>
            <Banner
              src={data.src}
              path={data.path}
              title={data.title}
              text={data.text}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Banners;

import { FC } from "react";
import OrganicImageText from "../../molecules/organic/OrganicImageText";
import { datas } from "../../../lib/data";

import styles from "../../../styles/organisms/organic_images_text_area.module.scss";

const lastIndex = datas.length - 1;

const OrganicImagesText: FC = () => {
  return (
    <section className={styles.area}>
      {datas.map((data, i) => {
        const largeBottom = i % 3 === 0 || i === 0;
        const marginBottom =
          i === lastIndex
            ? styles.area__last
            : largeBottom
            ? styles.area__large_bottom
            : styles.area__small_bottom;

        return (
          <div className={marginBottom} key={i}>
            <OrganicImageText
              type={data.type}
              path={data.path}
              title={data.title}
              subTitle={data.subTitle}
              text={data.text}
            />
          </div>
        );
      })}
    </section>
  );
};

export default OrganicImagesText;

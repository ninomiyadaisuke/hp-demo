import Image from "next/image";
import React from "react";
import { JuiceMenuItemsDatas, OnigiriMenuItemsDatas } from "../../../lib/data";
import { shuffleArray } from "../../../lib/helper";
import { BarMenuItemsType } from "../../../lib/types";

import styles from "./../../../styles/organisms/bar_slide.module.scss";

const BarSlide = () => {
  const newArray = OnigiriMenuItemsDatas.concat(JuiceMenuItemsDatas);
  const shuffledArray = shuffleArray(newArray);

  let content = <p>no images</p>;
  if (shuffledArray.length > 0) {
    content = (
      <>
        {shuffledArray.map((image: BarMenuItemsType) => (
          <li key={image.id}>
            <Image
              src={image.srcImg}
              alt={image.altImg}
              width={440}
              height={742}
              objectFit="cover"
              // loading="lazy"
            />
          </li>
        ))}
      </>
    );
  }

  return (
    <section className={styles.container}>
      <ul className={styles.container__list}>{content}</ul>
    </section>
  );
};

export default BarSlide;

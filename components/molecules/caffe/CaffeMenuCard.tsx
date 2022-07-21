import Image from "next/image";
import React, { FC } from "react";
import { BarMenuItemsType } from "../../../lib/types";

import styles from "./../../../styles/molecules/caffe_menu_card.module.scss";

const CaffeMenuCard: FC<BarMenuItemsType> = props => {
  const { title, price, description, srcImg, altImg, allergy } = props;
  const allergies = (
    <>
      {allergy?.map((data: any) => (
        <li key={data.alt}>
          <Image src={data.src} alt={data.alt} width={25} height={25} objectFit="cover" />
        </li>
      ))}
    </>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{title}</h1>
      <p className={styles.container__price}>¥ {price} 税込 </p>
      <div className={styles.container__allergy}>
        <ul>{allergies}</ul>
      </div>
      <p className={styles.container__description}>{description}</p>
      <div className={styles.container__img}>
        <Image src={srcImg} objectFit="cover" layout="fill" alt={altImg} />
      </div>
    </div>
  );
};

export default CaffeMenuCard;

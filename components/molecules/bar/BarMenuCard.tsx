import Image from "next/image";
import React, { FC } from "react";
import { GiPeanut, GiFruitBowl } from "react-icons/gi";
import { TbMilk, TbEgg } from "react-icons/tb";
import { BarMenuItemsType } from "../../../lib/types";

import styles from "./../../../styles/molecules/bar_menu_card.module.scss";

// const peanut = <GiPeanut className={styles.container__allergy_icon} />;

const BarMenuCard: FC<BarMenuItemsType> = props => {
  const { title, price, description, srcImg, altImg } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{title}</h1>
      <p className={styles.container__price}>¥ {price} 税込 </p>
      <div className={styles.container__allergy}>
        <GiPeanut className={styles.container__allergy_icon} />
        <TbMilk className={styles.container__allergy_icon} />
        <GiFruitBowl className={styles.container__allergy_icon} />
        <TbMilk className={styles.container__allergy_icon} />
        <GiPeanut className={styles.container__allergy_icon} />
        <GiFruitBowl className={styles.container__allergy_icon} />
        <TbEgg className={styles.container__allergy_icon} />
        <TbEgg className={styles.container__allergy_icon} />
      </div>
      <p className={styles.container__description}>{description}</p>
      <div className={styles.container__img}>
        <Image src={srcImg} objectFit="cover" layout="fill" alt={altImg} />
      </div>
    </div>
  );
};

export default BarMenuCard;

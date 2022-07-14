import Image from "next/image";
import React, { FC, ReactNode } from "react";

import styles from "./../../../styles/molecules/bar_presentation.module.scss";

type Props = {
  img: string;
  altImg: string;
  titleOne: string;
  titleTwo: string;
  description: ReactNode;
  typeTop?: boolean;
};

const BarPresentation: FC<Props> = props => {
  const { img, altImg, titleOne, titleTwo, description, typeTop } = props;

  const classType =
    typeTop && typeTop !== undefined ? `bar__container_type_top` : `bar__container_type_section`;

  return (
    <div className={[styles[classType], styles.shared_styles].join(" ")}>
      <div className={styles[`${classType}_titles`]}>
        <div className={styles[`${classType}_titles_img`]}>
          {typeTop && (
            <Image src={img} alt={altImg} width={247} height={104} objectFit="fill" />
          )}
          {!typeTop && (
            <Image
              className={styles[`${classType}_titles_img_next`]}
              src={img}
              alt={altImg}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          )}
        </div>
        <div className={styles[`${classType}_titles_header`]}>
          <h1>{titleOne}</h1>
          <h2>{titleTwo}</h2>
        </div>
      </div>
      <div className={styles[`${classType}_description`]}>{description}</div>
    </div>
  );
};

export default BarPresentation;

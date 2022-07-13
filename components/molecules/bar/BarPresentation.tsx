import Image from "next/image";
import React, { FC, ReactNode } from "react";

import styles from "./../../../styles/molecules/bar_presentation.module.scss";

type Props = {
  img: string;
  altImg: string;
  titleOne: string;
  titleTwo: string;
  description: ReactNode;
  type1?: boolean;
  type2?: boolean;
};

const BarPresentation: FC<Props> = props => {
  const { img, altImg, titleOne, titleTwo, description, type1, type2 } = props;

  const classType =
    type1 && type1 !== undefined ? `bar__container_type1` : `bar__container_type2`;

  return (
    <div className={[styles[classType], styles.shared_styles].join(" ")}>
      <div className={styles[`${classType}_titles`]}>
        <div className={styles[`${classType}_titles_img`]}>
          {type1 && (
            <Image src={img} alt={altImg} width={247} height={104} objectFit="fill" />
          )}
          {type2 && (
            <Image
              className={styles[`${classType}_titles_img_next`]}
              src={img}
              alt={altImg}
              layout="fill"
              objectFit="cover"
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

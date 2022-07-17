import { FC,useState,useEffect } from "react";
import BusinessHours from "../../atoms/BusinessHours";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

import styles from "../../../styles/molecules/title_text_hours.module.scss";

type Props = {
  title: string;
  subTitle?: string;
  text: string;
  fontColor?: "black" | "white";
  nonTitle?: boolean;
  nonText?: boolean;
  nonHours?: boolean;
};

const TitleTextHours: FC<Props> = (props) => {
  const {
    title,
    subTitle,
    text,
    fontColor = "black",
    nonHours = false,
    nonText = false,
    nonTitle = false,
  } = props;
  const black = fontColor === "black";
  return (
    <div className={styles.shopInfo}>
      {!nonTitle && (
        <div className={styles.shopInfo__title}>
          <Title title={title} subTitle={subTitle} />
        </div>
      )}
      {!nonText && (
        <Text
          className={
            black ? styles.shopInfo__text : styles.shopInfo__text_white
          }
          text={text}
        />
      )}
      {!nonHours && <BusinessHours fontColor={fontColor} />}
    </div>
  );
};

export default TitleTextHours;

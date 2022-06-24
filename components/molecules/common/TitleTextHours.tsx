import { FC } from "react";
import BusinessHours from "../../atoms/BusinessHours";
import Text from "../../atoms/Text";

import styles from "../../../styles/molecules/title_text_hours.module.scss";

type Props = {
  title: string;
  subTitle?: string;
  text: string;
  fontColor: "black" | "white";
};

const TitleTextHours: FC<Props> = (props) => {
  const { title, subTitle, text, fontColor } = props;
  return (
    <div className={styles.shopInfo}>
      <div className={styles.shopInfo__titletext}>
        <div>
          {subTitle && <p className={styles.shopInfo__subTitle}>{subTitle}</p>}
          <h2>{title}</h2>
        </div>
      </div>
      <p>{text}</p>
      <BusinessHours />
    </div>
  );
};

export default TitleTextHours;

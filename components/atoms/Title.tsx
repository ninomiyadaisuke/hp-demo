import { FC } from "react";

import styles from "../../styles/atoms/title.module.scss";

type Props = {
  fontColor?: "black" | "white";
  title: string;
  subTitle?: string;
};

const Title: FC<Props> = (props) => {
  const { fontColor = "black", title, subTitle } = props;
  const black = fontColor === "black";
  return (
    <div className={styles.title}>
      {subTitle && (
        <p className={black ? styles.title__sub : styles.title__white}>
          {subTitle}
        </p>
      )}
      <h2 className={black ? styles.title__title : styles.title__white}>
        {title}
      </h2>
    </div>
  );
};

export default Title;

import { FC } from "react";
import Text from "./Text";

import styles from "../../styles/atoms/faq.module.scss";

type Props = {
  title: string;
  text: string;
};

const FaqItem: FC<Props> = props => {
  const { title, text } = props;
  return (
    <li className={styles.faq}>
      <h3>{title}</h3>
      <Text className={styles.faq__text} text={text} />
      <div className={styles.faq__line}/>
    </li>
  );
};

export default FaqItem;

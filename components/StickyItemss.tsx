import { FC } from "react";
import MenuLink from "./atoms/MenuLink";
import Text from "./atoms/Text";
import Title from "./atoms/Title";
import Yspacer from "./atoms/Yspacer";

import styles from "../styles/sticky_item.module.scss";

const StickyItem: FC = () => {
  return (
    <div className={styles.item}>
      <Yspacer pcSize={0} spSize={90} />
      <Title level={1}>The Nayuta Zero</Title>
      <Yspacer pcSize={40} spSize={40} />
      <div className={styles.item__text}>
        <Text
          text={
            "Nayuta概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          }
        />
      </div>
      <Yspacer pcSize={56} spSize={42} />
      <div className={styles.item__container}>
        <MenuLink
          path="/"
          type={"toAbout"}
          text="view more about The Nayuta zero"
        />
        <Yspacer pcSize={128} spSize={72} />
        <MenuLink
          path="/"
          type={"toNews"}
          text="202X. XX. XX  営業日についてのお知らせ"
        />
        <Yspacer pcSize={32} spSize={32} />
        <span>
          過去の
          <MenuLink path="/" type={"toPastNews"} text="お知らせ" />
        </span>
      </div>
    </div>
  );
};

export default StickyItem;

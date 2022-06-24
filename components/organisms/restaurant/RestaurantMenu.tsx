import { FC } from "react";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Image from "next/image";
import Text from "../../atoms/Text";

import styles from "../../../styles/organisms/restaurant_menu.module.scss";

const RestaurantMenu: FC = () => {
  const { mobile } = useBreakPoint();
  return (
    <section className={styles.menu}>
      <div className={styles.menu__image}>
        <Image
          src={"/menu/brooke-lark-RrzeCGujVfU-unsplash.jpg"}
          alt={"menu image"}
          height={mobile ? 550 : 880}
          width={mobile ? 380 : 900}
          objectFit={"cover"}
        />
      </div>
      <div className={styles.menu__text}>
        <h2>メニュー・コンセプト紹介 1</h2>
        <p className={styles.menu__price}>
          ¥1,000<span>税込</span>
        </p>
        <Text text="コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。" />
      </div>
    </section>
  );
};

export default RestaurantMenu;

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "./Text";

import styles from "../../styles/card.module.scss";

type Props = {
  path: string;
  simplified?: boolean;
};

const Card: FC<Props> = (props) => {
  const { path = "/", simplified = false } = props;
  return (
    <Link href={path}>
      <a className={styles.cards}>
        <div
          className={
            !simplified
              ? styles.cards__container
              : styles.cards__container_simplified
          }
        >
          <div className={simplified ? styles.cards__icon_test : styles.cards__icon}>
            <Image src={"/icon.png"} alt={"icon"} width={66} height={66} />
          </div>
          <div className={styles.cards__position}>
            <div>
              <h3 className={simplified ? styles.cards__title : undefined}>
                Facility name (List element)
              </h3>
              {!simplified && (
                <div className={styles.cards__text}>
                  <Text text="Nayuta概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。" />
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

import { FC } from "react";
import Text from "../atoms/Text";
import MenuLink from "../atoms/MenuLink";

import styles from "../../styles/sticky_item.module.scss";

const StickyItems: FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__container}>
        <div className={styles.item__up}>
          <svg
            className={styles.item__content}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 60"
          >
            <text
              id="The_Nayuta_Zero"
              data-name="The Nayuta Zero"
              transform="translate(226 46)"
              fill="#444"
              fontSize="60"
              fontFamily="Helvetica"
            >
              <tspan x="-225.103" y="0">
                The Nayuta Zero
              </tspan>
            </text>
          </svg>
          <Text text="Nayuta概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。" />
          <div>
            <MenuLink
              type={"toAbout"}
              text={"view more about Th e Nayuta zero"}
              path={"/about"}
            />
          </div>
        </div>
        <div className={styles.item__down}>
          <div>
            <MenuLink
              type={"toNews"}
              text={"202X. XX. XX  営業日についてのお知らせ"}
              path={"/news"}
            />
          </div>
          <div className={styles.item__link}>
            <span>
              過去の
              <MenuLink
                type={"toPastNews"}
                text={"お知らせ"}
                path={"/news"}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyItems;

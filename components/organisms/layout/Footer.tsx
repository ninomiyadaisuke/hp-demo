import { FC } from "react";
import Logo from "../../atoms/Logo";
import Icons from "../../molecules/Icons";
import MenuLink from "../../atoms/MenuLink";

import styles from "../../../styles/footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__policy}>
        <MenuLink type={"toPolicy"} text={"プライバシーポリシー"} path={"/"} />
      </div>
      <div className={styles.footer__disclaimer}>
        <MenuLink
          type={"toPolicy"}
          text={"その他免責事項について"}
          path={"/"}
        />
      </div>
      <div className={styles.footer__container}>
        <div>
          <div className={styles.footer__icon}>
            <Icons vertical={false} />
          </div>
          <div className={styles.footer__logo}>
            <Logo />
          </div>
          <small>&copy; 2022 Maedagumi, Inc. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

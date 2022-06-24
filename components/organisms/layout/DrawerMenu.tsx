import { FC, Dispatch, SetStateAction } from "react";
import Drawer from "react-modern-drawer";
import GridCard from "../GridCard";
import Icons from "../../molecules/Icons";
import MenuLinks from "../../atoms/MenuLink";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Logo from "../../atoms/Logo";

import styles from "../../../styles/organisms/drawer.module.scss";
import "react-modern-drawer/dist/index.css";

const drawerLinks = [
  {
    text: "HOME",
    path: "/",
  },
  {
    text: "ABOUT",
    path: "/about",
  },
  {
    text: "お知らせ",
    path: "/",
  },
  {
    text: "プライバシーポリシー",
    path: "/",
  },
  {
    text: "その他免責事項",
    path: "/",
  },
];

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const DrawerMenu: FC<Props> = (props) => {
  const { open, setOpen } = props;
  const { mobile } = useBreakPoint();
  return (
    <div className={styles.drawer}>
      <Drawer open={open} onClose={() => setOpen(!open)} direction="left">
        {mobile && <h2>The Nayuta Zero</h2>}
        <div className={styles.drawer__icons}>
          <Icons vertical={true} open={open} />
        </div>
        <div className={styles.drawer__row}>
          <div className={styles.drawer__links}>
            <div className={styles.drawer__links_position}>
              {drawerLinks.map((link, i) => (
                <div key={i} onClick={() => setOpen(false)}>
                  <MenuLinks
                    type={"drawer"}
                    text={link.text}
                    path={link.path}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.drawer__cards}>
            <div className={styles.drawer__cards_width}>
              <GridCard />
            </div>
          </div>
          {!mobile && (
            <small>Copryright 2022 Maedagumi, Inc. All rights reserved.</small>
          )}
          <div className={styles.drawer__logo}>
            <Logo />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;

import { FC, Dispatch, SetStateAction } from "react";
import Drawer from "react-modern-drawer";

import classes from "../../../styles/organisms/link_modal_menu.module.scss";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";

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
  openLinkHandler: () => void;
};

const LinkModalMenu: FC<Props> = props => {
  const { open = false, setOpen, openLinkHandler } = props;
  return (
    <div className={classes.container}>
      <button onClick={openLinkHandler} className={classes.container__btn}>
        Open Link Menu
      </button>

      <Drawer
        open={open}
        onClose={() => setOpen(!open)}
        direction="top"
        className={classes.container__drawer}
      >
        <div className={classes.container__drawer_display}>
          <p>二ノ宮：</p>
          <div className={classes.container__drawer_display_link}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
            <Link href="/organic">
              <a>Organic</a>
            </Link>
            <Link href="/restaurant">
              <a>Restaurant</a>
            </Link>
          </div>
        </div>
        <div className={classes.container__drawer_display}>
          <p>Thomas：</p>
          <div className={classes.container__drawer_display_link}>
            <Link href="/bar">
              <a>Bar Juice and Onigiri</a>
            </Link>
            <Link href="/news">
              <a>お知らせ</a>
            </Link>
            <Link href="/concert">
              <a>Concert</a>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default LinkModalMenu;

import { FC, Dispatch, SetStateAction } from "react";
import styles from "../../styles/atoms/menu.module.scss";

type Props = {
  setOpen:Dispatch<SetStateAction<boolean>>;
  open:boolean;
}

const MenuIcon: FC<Props> = (props) => {
  const { setOpen, open } = props;
  return (
    <div
      onClick={() => setOpen(!open)}
      className={open ? styles.menu__active : styles.menu}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default MenuIcon;

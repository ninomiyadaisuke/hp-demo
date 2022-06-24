import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../atoms/MenuIcon";
import Yspacer from "../atoms/Yspacer";
import styles from "../../styles/header.module.scss";
import { useBreakPoint } from "../../hooks/useBreakPoint";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const Header: FC<Props> = (props) => {
  const { setOpen, open } = props;
  const { mobile } = useBreakPoint();
  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"}>
          <a>
            <Image
              src={"/logo.png"}
              width={180}
              height={54}
              alt={"ロゴ"}
              objectFit={"contain"}
            />
          </a>
        </Link>
      </h1>
      <Yspacer pcSize={10} spSize={0} />
      <nav>
        <MenuIcon setOpen={setOpen} open={open} />
      </nav>
    </header>
  );
};

export default Header;

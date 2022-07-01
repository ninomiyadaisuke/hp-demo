import { FC } from "react";
import Link from "next/link";
import styles from '../../styles/atoms/to_ec_button.module.scss'

const ToEcButton: FC = () => {
  return (
    <Link href={"https://nayuta.store/"}>
      <a className={styles.button}>
        <p>ECサイトはこちら</p>
      </a>
    </Link>
  );
};

export default ToEcButton;

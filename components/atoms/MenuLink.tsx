import { FC, Dispatch, SetStateAction } from "react";
import Link from "next/link";

import styles from "../../styles/link.module.scss";

type Props = {
  type:
    | "toAbout"
    | "toNews"
    | "toPastNews"
    | "toContact"
    | "toPolicy"
    | "drawer";
  text: string;
  path: string;
};

const MenuLinks: FC<Props> = (props) => {
  const { type, text, path } = props;

  const className = (() => {
    switch (type) {
      case "toAbout":
        return `${styles.links} ${styles.links__about}`;
      case "toNews":
        return `${styles.links} ${styles.links__news}`;
      case "toPastNews":
        return `${styles.links} ${styles.links__post}`;
      case "toContact":
        return `${styles.links} ${styles.links__contact}`;
      case "toPolicy":
        return `${styles.links} ${styles.links__policy}`;
      case "drawer":
        return `${styles.links} ${styles.links__drawer}`;
      default: {
        const _: never = type;
      }
    }
  })();

  return (
    <Link href={path}>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default MenuLinks;

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "../../atoms/Text";

import styles from "../../../styles/molecules/banner.module.scss";

type Props = {
  src: string;
  path: string;
  title?: string;
  text: string;
};

const Banner: FC<Props> = (props) => {
  const { path, title, text, src } = props;
  return (
    <Link href={path}>
      <a className={styles.banner}>
        <div className={styles.banner__image}>
          <Image src={src} alt={""} objectFit={"cover"} layout={"fill"} />
        </div>
        <div className={styles.banner__container}>
          <div className={styles.banner__space}>
            <h3>{title}</h3>
            <Text text={text} className={styles.banner__text} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Banner;

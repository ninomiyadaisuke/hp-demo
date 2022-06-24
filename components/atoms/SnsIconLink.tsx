import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/atoms/sns_icon.module.scss";

type Props = {
  link: string;
  path: string;
  text: string;
  height: number;
  width: number;
};

const SnsIconLink: FC<Props> = (props) => {
  const { path, link, width, height, text } = props;
  return (
    <Link href={link}>
      <a className={styles.sns}>
        <div className={styles.sns__image}>
          <Image
            src={path}
            alt={"Sns icon"}
            width={width}
            height={height}
            objectFit={"scale-down"}
          />
        </div>
        <p>{text}</p>
      </a>
    </Link>
  );
};

export default SnsIconLink;

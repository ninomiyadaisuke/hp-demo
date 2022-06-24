import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/item.module.scss";

type Props = {
  path: string;
};

const Item: FC<Props> = (props) => {
  const { path } = props;
  return (
    <div className={styles.item}>
      <Link href={"/sample"}>
        <a>
          <Image src={path} alt={"image"} layout={"fill"} />
        </a>
      </Link>
    </div>
  );
};

export default Item;

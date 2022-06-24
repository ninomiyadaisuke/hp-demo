import { FC } from "react";
import Image from "next/image";
import { useBreakPoint } from "../../hooks/useBreakPoint";

import styles from "../../styles/icons.module.scss";

type Props = {
  vertical: boolean;
  open?: boolean;
};

const Icons: FC<Props> = (props) => {
  const { vertical, open } = props;
  const { mobile } = useBreakPoint();
  const mobileDrawer = mobile && open;
  return (
    <div
      className={vertical ? styles.icons__vertical : styles.icons__horizontal}
    >
      <div>
        <Image
          src={"/Instagram-navy.png"}
          alt={"Instagram"}
          width={mobileDrawer ? 20 : 40}
          height={mobileDrawer ? 20 : 40}
          objectFit={"scale-down"}
        />
      </div>
      <div>
        <Image
          src={"/Twitter.png"}
          alt={"Twitter"}
          width={mobileDrawer ? 22 : 42}
          height={mobileDrawer ? 18 : 34}
          objectFit={"scale-down"}
        />
      </div>
      <div>
        <Image
          src={"/youtube-navy.png"}
          alt={"Youtube"}
          width={mobileDrawer ? 25 : 48}
          height={mobileDrawer ? 18 : 34}
          objectFit={"scale-down"}
        />
      </div>
    </div>
  );
};

export default Icons;

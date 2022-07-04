import { FC } from "react";
import Image from "next/image";
import useBreakpoint from "use-breakpoint";
import Text from "../atoms/Text";
import Yspacer from "../atoms/Yspacer";

import styles from "../../styles/access.module.scss";

const BREAKPOINTS = { mobile: 0, tablet: 768 };

const Access: FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  return (
    <section className={styles.access}>
      <Yspacer pcSize={50} spSize={0} />
      <div className={styles.access__container}>
        <div>
          <div className={styles.access__map}>
            <Image
              src={
                breakpoint === "mobile"
                  ? "/map-sp.png"
                  : "/map.jpg"
              }
              alt={"map"}
              width={breakpoint === "mobile" ? 340 : 1296}
              height={breakpoint === "mobile" ? 500 : 752}
              layout={"responsive"}
            />
          </div>
          <Yspacer pcSize={50} spSize={24} />
          <Text text="JR篠栗駅より 〇〇で □□を▷▷分国道201号線<br>篠栗北交差点を北へ、道なりに〇〇進み右側<br>など、アクセス方法を掲載します。" />
        </div>
      </div>
    </section>
  );
};

export default Access;

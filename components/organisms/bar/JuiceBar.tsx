import React, { Fragment } from "react";
import BarMenuJuiceList from "../../molecules/bar/BarMenuJuiceList";
import BarPresentation from "../../molecules/bar/BarPresentation";

import styles from "./../../../styles/organisms/onigiri_bar.module.scss";

const JuiceBar = () => {
  const juiceDescription = (
    <p>
      コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
      <br />
      <br />
      コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
    </p>
  );

  return (
    <Fragment>
      <section className={styles.top}>
        <BarPresentation
          img={"/bar/orange-juice.jpg"}
          altImg={"orange juice photo"}
          titleOne={"Juice Bar"}
          titleTwo={"Delight"}
          description={juiceDescription}
          type2={true}
        />
        <BarMenuJuiceList />
      </section>
    </Fragment>
  );
};

export default JuiceBar;

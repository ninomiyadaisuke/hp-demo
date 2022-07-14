import React, { Fragment } from "react";
import BarMenuOnigiriList from "../../molecules/bar/BarMenuOnigiriList";
import BarPresentation from "../../molecules/bar/BarPresentation";

import styles from "./../../../styles/organisms/onigiri_bar.module.scss";

const OnigiriBar = () => {
  const onigiriDescription = (
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
          img={"/bar/onigiri_plate.jpg"}
          altImg={"one onigiri on a plate"}
          titleOne={"玄米おにぎり"}
          titleTwo={"ひとやすみ"}
          description={onigiriDescription}
          typeTop={false}
        />
        <BarMenuOnigiriList />
      </section>
    </Fragment>
  );
};

export default OnigiriBar;

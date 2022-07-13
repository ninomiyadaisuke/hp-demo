import React from "react";
import BarMenuCard from "../molecules/bar/BarMenuCard";
import BarsTop from "../organisms/bar/BarsTop";
import JuiceBar from "../organisms/bar/JuiceBar";
import OnigiriBar from "../organisms/bar/OnigiriBar";

import styles from "./../../styles/templates/bar_template.module.scss";

const BarsTemplate = () => {
  return (
    <article className={styles.bars}>
      <BarsTop />
      <OnigiriBar />
      <JuiceBar />
    </article>
  );
};

export default BarsTemplate;

import React from "react";
import BarMenuCard from "../molecules/bar/BarMenuCard";
import AccessGoogleMap from "../organisms/AccessGoogleMap";
import BarSlide from "../organisms/bar/BarSlide";
import BarsTop from "../organisms/bar/BarsTop";
import JuiceBar from "../organisms/bar/JuiceBar";
import OnigiriBar from "../organisms/bar/OnigiriBar";
import DownloadMenu from "../organisms/DownloadMenu";

import styles from "./../../styles/templates/bar_template.module.scss";

const BarsTemplate = () => {
  return (
    <article className={styles.bars}>
      <BarsTop />
      <OnigiriBar />
      <JuiceBar />
      <DownloadMenu />
      <BarSlide />
      <AccessGoogleMap showTitle={true} typeColumn={false} />
    </article>
  );
};

export default BarsTemplate;

import { FC } from "react";
import AboutTop from "../organisms/about/AboutTop";
import Concept from "../organisms/about/Concept";
import Yspacer from "../atoms/Yspacer";
import GridCard from "../organisms/GridCard";
import AboutInfo from "../organisms/about/AboutInfo";

import styles from "../../styles/templates/about_template.module.scss";

const AboutTemplate: FC = () => {
  return (
    <>
      <div className={styles.about__top}>
        <AboutTop />
      </div>
      <Yspacer pcSize={200} spSize={91} />
      <div className={styles.about__other}>
        <Concept />
        <Yspacer pcSize={200} spSize={91} />
        <AboutInfo />
        <Yspacer pcSize={40} spSize={40} />
        <div className={styles.about__grid}>
          <GridCard />
        </div>
      </div>
      <Yspacer pcSize={200} spSize={91} />
    </>
  );
};

export default AboutTemplate;

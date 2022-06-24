import { FC } from "react";
import ImageText from "../../molecules/about/ImageText";
import Yspacer from "../../atoms/Yspacer";

import styles from "../../../styles/organisms/about_concept.module.scss";

const Concept: FC = () => {
  return (
    <section className={styles.concept}>
      <ImageText
        path="/IMG_01.png"
        position={"left"}
        title={"コンセプト紹介 1"}
        text={
          "コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        }
      />
      <Yspacer pcSize={150} spSize={50} />
      <ImageText
        path="/IMG_01.png"
        position={"right"}
        title={"コンセプト紹介 1"}
        text={
          "コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        }
      />
    </section>
  );
};

export default Concept;

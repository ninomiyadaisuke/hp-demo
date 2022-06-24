import { FC } from "react";
import StickyItems from "../molecules/StickyItem";
import List from "./List";
import Yspacer from "../atoms/Yspacer";

import styles from "../../styles/sticky_container.module.scss";

const StickyContainer: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__item}>
        <StickyItems />
      </div>
      <Yspacer pcSize={0} spSize={80} />
      <div className={styles.container__list}>
        <List />
      </div>
    </section>
  );
};

export default StickyContainer;

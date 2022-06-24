import { FC } from "react";
import ListCard from "../organisms/ListCard";
import { data } from "../../lib/data";
import Layout from "../layout/Layout";
import StickyContainer from "../organisms/StickyContainer";
import Access from "../organisms/Access";
import Contanct from "../organisms/Contanct";
import Yspacer from "../atoms/Yspacer";

import styles from '../../styles/top_template.module.scss';

const TopTemplate: FC = () => {
  return (
    <div className={styles.top}>
      <Yspacer pcSize={20} spSize={120} />
      <StickyContainer />
      <Yspacer pcSize={150} spSize={100} />
      <>
        {data &&
          data.map((data) => (
            <section key={data.id}>
              <ListCard map={data.map} cards={data.cards} text={data.text} />
              <Yspacer pcSize={0} spSize={150} />
            </section>
          ))}
      </>
      <Yspacer pcSize={150} spSize={100} />
      <Access />
      <Yspacer pcSize={150} spSize={100} />
      <Contanct />
    </div>
  );
};

export default TopTemplate;

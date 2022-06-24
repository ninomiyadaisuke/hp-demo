import { FC } from "react";
import Item from "../atoms/Item";
import { items } from "../../lib/data";
import Yspacer from "../atoms/Yspacer";

import styles from "../../styles/list.module.scss";

const List: FC = () => {
  return (
    <div className={styles.list}>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <Item path={item.image} />
            <Yspacer pcSize={20} spSize={16} />
          </div>
        ))}
    </div>
  );
};

export default List;

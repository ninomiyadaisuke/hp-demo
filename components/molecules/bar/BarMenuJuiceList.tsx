import React from "react";
import { JuiceMenuItemsDatas } from "../../../lib/data";
import { BarMenuItemsType } from "../../../lib/types";
import BarMenuItems from "./BarMenuItems";

import styles from "./../../../styles/molecules/bar_menu_list.module.scss";

const BarMenuJuiceList = () => {
  let content = <p>no data founds</p>;

  if (JuiceMenuItemsDatas.length > 0) {
    content = (
      <>
        {JuiceMenuItemsDatas.map((item: BarMenuItemsType) => (
          <BarMenuItems
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            srcImg={item.srcImg}
            altImg={item.altImg}
          />
        ))}
      </>
    );
  }

  return <ul className={styles.list}>{content}</ul>;
};

export default BarMenuJuiceList;

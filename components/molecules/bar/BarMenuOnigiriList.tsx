import React from "react";
import { OnigiriMenuItemsDatas } from "../../../lib/data";
import { BarMenuItemsType } from "../../../lib/types";
import BarMenuItems from "./BarMenuItems";

import styles from "./../../../styles/molecules/bar_menu_list.module.scss";

const BarMenuOnigiriList = () => {

  let content = <p>no data founds</p>;

  if (OnigiriMenuItemsDatas.length > 0) {
    content = (
      <>
        {OnigiriMenuItemsDatas.map((item: any) => (
          <BarMenuItems
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            srcImg={item.srcImg}
            altImg={item.altImg}
            allergy={item.allergy}
          />
        ))}
      </>
    );
  }

  return <ul className={styles.list}>{content}</ul>;
};

export default BarMenuOnigiriList;

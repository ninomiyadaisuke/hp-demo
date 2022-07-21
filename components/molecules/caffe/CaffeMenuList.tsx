import React from "react";
import { CaffeMenuItemsDatas } from "../../../lib/data";
import { BarMenuItemsType } from "../../../lib/types";
import CaffeMenuItems from "./CaffeMenuItems";

import styles from "./../../../styles/molecules/caffe_menu_list.module.scss";

const CaffeMenuList = () => {
  let content = <p>no data founds</p>;

  if (CaffeMenuItemsDatas.length > 0) {
    content = (
      <>
        {CaffeMenuItemsDatas.map((item: BarMenuItemsType) => (
          <CaffeMenuItems
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            allergy={item.allergy}
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

export default CaffeMenuList;

import React, { FC } from "react";
import { BarMenuItemsType } from "../../../lib/types";
import CaffeMenuCard from "./CaffeMenuCard";

const CaffeMenuItems: FC<BarMenuItemsType> = props => {
  const { id, title, price, description, srcImg, altImg, allergy } = props;

  return (
    <li>
      <CaffeMenuCard
        id={id}
        title={title}
        price={price}
        description={description}
        allergy={allergy}
        srcImg={srcImg}
        altImg={altImg}
      />
    </li>
  );
};

export default CaffeMenuItems;

import React, { FC } from "react";
import { BarMenuItemsType } from "../../../lib/types";
import BarMenuCard from "./BarMenuCard";

const BarMenuItems: FC<BarMenuItemsType> = props => {
  const { id, title, price, description, srcImg, altImg } = props;

  return (
    <li>
      <BarMenuCard
        id={id}
        title={title}
        price={price}
        description={description}
        srcImg={srcImg}
        altImg={altImg}
      />
    </li>
  );
};

export default BarMenuItems;

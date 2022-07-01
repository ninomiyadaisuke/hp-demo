import { FC, Dispatch, SetStateAction } from "react";
import { data } from "../../lib/data";
import { deformation } from "../../lib/helper";
import Card from "../atoms/Card";

import styles from "../../styles/grid.module.scss";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const GridCard: FC<Props> = (props) => {
  const { setOpen } = props;
  const cards = deformation(data);

  return (
    <div  data-about="about" data-dialog="dialog" className={styles.grid}>
      {cards &&
        cards.map((card) => (
          <Card setOpen={setOpen} key={card.id} path="/about" simplified={true} />
        ))}
    </div>
  );
};

export default GridCard;

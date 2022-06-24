import { FC } from "react";
import { data } from "../../lib/data";
import { deformation } from "../../lib/helper";
import Card from "../atoms/Card";

import styles from "../../styles/grid.module.scss";

const GridCard: FC = () => {
  const cards = deformation(data);

  return (
    <div data-about="about" data-dialog='dialog' className={styles.grid}>
      {cards &&
        cards.map((card) => <Card key={card.id} path="/about" simplified={true} />)}
    </div>
  );
};

export default GridCard;

import { FC } from "react";
import Card from "../atoms/Card";
import Image from "next/image";
import Yspacer from "../atoms/Yspacer";
import Text from "../atoms/Text";

import styles from "../../styles/card_list.module.scss";

type Props = {
  map: string;
  text: string;
  cards: {
    id: string;
    icon: string;
    title: string;
    discription: string;
  }[];
};

const ListCard: FC<Props> = (props) => {
  const { map, text, cards } = props;
  return (
    <div className={styles.contents}>
      <div className={styles.contents__map}>
        <div className={styles.contents__map_image}>
          <Yspacer pcSize={164} />
          <Image
            src={map}
            alt={"map"}
            width={591}
            height={752}
            layout={"responsive"}
          />
          <Yspacer pcSize={16} spSize={24} />
          <Text text={text} />
        </div>
        <Yspacer pcSize={0} spSize={68} />
      </div>
      <div className={styles.contents__list}>
        <div className={styles.contents__list_item}>
          {cards &&
            cards.map((card) => {
              return (
                <div key={card.id}>
                  <Card path={"/restaurant"} />
                  <Yspacer pcSize={16} spSize={10} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListCard;

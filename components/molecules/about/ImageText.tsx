import { FC } from "react";
import Text from "../../atoms/Text";
import Image from "next/image";

import styles from "../../../styles/molecules/imagetext.module.scss";

type Props = {
  position: "left" | "right";
  title: string;
  text: string;
  path: string;
};

const ImageText: FC<Props> = (props) => {
  const { position = "left", title, text, path } = props;

  const className = position === 'left' ? 'imagetext__image' : 'imagetext__right'

  return (
    <section className={styles.imagetext}>
      <div className={styles[className]}>
        <Image src={path} alt={"concept image"} height={900} width={761}  />
      </div>
        <div className={styles.imagetext__text}>
          <h2>{title}</h2>
          <Text text={text} />
        </div>
    </section>
  );
};

export default ImageText;

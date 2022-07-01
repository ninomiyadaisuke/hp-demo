import { FC } from "react";
import Image from "next/image";
import Text from "../../atoms/Text";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import styles from "../../../styles/molecules/organic_image_text.module.scss";

type Props = {
  type: "left" | "right" ;
  path: string;
  title?: string;
  subTitle?: string;
  text: string;
};

const OrganicImageText: FC<Props> = (props) => {
  const { type, path, title, subTitle, text } = props;
  const { mobile } = useBreakPoint();
  const imageLeft = type === "left";
  const textPosition = imageLeft
    ? styles.imagetext__container_right
    : styles.imagetext__container;
  const imagePostion = imageLeft
    ? styles.imagetext__image_container
    : styles.imagetext__image_container_right;

  return (
    <div className={styles.imagetext}>
      <div className={imagePostion}>
        <div className={styles.imagetext__image}>
          <Image
            src={path}
            alt={"gallery image"}
            width={!mobile ? 708 : 800}
            height={!mobile ? 487 : 736}
            objectFit={"cover"}
          />
        </div>
      </div>
      <div className={textPosition}>
        <div className={styles.imagetext__text_width}>
          <div className={styles.imagetext__title}>
            <h3>{title}</h3>
            <h3>{subTitle}</h3>
          </div>
          <Text text={text} className={styles.imagetext__text} />
        </div>
      </div>
    </div>
  );
};

export default OrganicImageText;

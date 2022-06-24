import { FC } from "react";

import styles from "../../styles/atoms/download_button.module.scss";

type Props = {
  onClick?: () => void;
};

const DownloadButton: FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <a
      href={"/hand.pdf"}
      download={"/hand.pdf"}
      className={styles.button}
      onClick={onClick}
    >
      <p className={styles.button__text}>
        メニューPDF File
        <br />
        Download Button
      </p>
    </a>
  );
};

export default DownloadButton;

import React, { FC } from "react";

import styles from "./../../styles/atoms/file_download_btn.module.scss";

type Props = {
  text: string;
};

const FileDownloadBtn: FC<Props> = props => {
  const { text } = props;
  return (
    <div className={styles.container}>
      <p>{text} メニューPDFダウンロード</p>
      <a href="/bar/bar-menu.jpg" download={"Bar_Menu"} className={styles.container__btn}>
        Download {text} Menu
      </a>
    </div>
  );
};

export default FileDownloadBtn;

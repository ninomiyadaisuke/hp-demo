import React from "react";
import FileDownloadBtn from "../atoms/FileDownloadBtn";

import styles from "./../../styles/organisms/download_menu.module.scss";

const DownloadMenu = () => {
  return (
    <section className={styles.container}>
      <h2>メニューPDFダウンロード</h2>
      <p>
        PDFの説明を掲載しますPDFの説明を掲載しますPDFの説明を掲載します。PDFの説明を掲載しますPDFの説明を掲載します。
        <br />
        PDFの説明を掲載します。PDFの説明を掲載しますPDFの説明を掲載します。
      </p>
      <div className={styles.container__btns}>
        <FileDownloadBtn text="Onigiri" />
        <FileDownloadBtn text="Juice" />
      </div>
    </section>
  );
};

export default DownloadMenu;

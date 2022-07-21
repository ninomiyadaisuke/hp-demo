import React from "react";
import ImportantPoints from "../atoms/ImportantPoints";
import AccessGoogleMap from "../organisms/AccessGoogleMap";
import CafeConcept from "../organisms/caffe/CafeConcept";
import CafeSwiper from "../organisms/caffe/CafeSwiper";
import CaffeLetterTop from "../organisms/caffe/CaffeLetterTop";
import CaffeMenu from "../organisms/caffe/CaffeMenu";
import styles from "./../../styles/templates/caffe_letter_template.module.scss";

const CaffeLetterTemplate = () => {
  return (
    <article className={styles.caffeLetter}>
      <CaffeLetterTop />
      <CafeConcept />
      <CaffeMenu />
      <CafeSwiper />
      <AccessGoogleMap showTitle={true} typeColumn={false} />
      <ImportantPoints />
    </article>
  );
};

export default CaffeLetterTemplate;

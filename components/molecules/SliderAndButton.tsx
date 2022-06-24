import { FC } from "react";
import DownloadButton from "../atoms/DownloadButton";
import ImageSlider from "../atoms/ImageSlider";

import styles from "../../styles/molecules/slider_and_button.module.scss";

const SliderAndButton: FC = () => {
  return (
    <section className={styles.sliderbutton}>
      <DownloadButton />
      <ImageSlider />
      {/* <div className={styles.sliderbutton__container}/> */}
    </section>
  );
};

export default SliderAndButton;

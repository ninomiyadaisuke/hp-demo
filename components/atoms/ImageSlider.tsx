import { FC } from "react";
import Image from "next/image";
import { images } from "../../lib/data";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useBreakpoint from "use-breakpoint";
const BREAKPOINTS = { mobile: 0, tablet: 768 };

import styles from "../../styles/atoms/image_slider.module.scss";

const ImageSlider: FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const mobile = breakpoint === "mobile";
  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={mobile ? 1.5 : 2} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
        navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
        spaceBetween={mobile ? 10 : 0}
      >
        {images.map((image, i) => {
          console.log(image);
          return (
            <SwiperSlide key={i} className={styles.slider__image}>
              <Image
                src={image}
                alt={"Menu Image"}
                height={880}
                width={450}
                objectFit={"cover"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

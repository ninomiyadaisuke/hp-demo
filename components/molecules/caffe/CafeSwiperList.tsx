import Image from "next/image";
import React, { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { CaffeMenuItemsDatas } from "../../../lib/data";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  width: number;
  height: number;
  oneSlide?: boolean;
};

const CafeSwiperList: FC<Props> = props => {
  const { width, height, oneSlide } = props;
  const { mobile } = useBreakPoint();
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={oneSlide ? 1 : mobile ? 1 : 1.5}
      loop={true}
      pagination={{ clickable: true }}
    >
      {CaffeMenuItemsDatas.map(image => {
        return (
          <SwiperSlide key={image.id}>
            <Image
              src={image.srcImg}
              width={width}
              height={height}
              objectFit="cover"
              alt={image.altImg}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CafeSwiperList;

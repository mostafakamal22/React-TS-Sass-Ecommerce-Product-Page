import { useMemo } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const carouselImagesPaths: string[] = [
  "/src/assets/images/image-product-1.jpg",
  "/src/assets/images/image-product-2.jpg",
  "/src/assets/images/image-product-3.jpg",
  "/src/assets/images/image-product-4.jpg",
];

const carouselThumbnails: string[] = [
  "/src/assets/images/image-product-1-thumbnail.jpg",
  "/src/assets/images/image-product-2-thumbnail.jpg",
  "/src/assets/images/image-product-3-thumbnail.jpg",
  "/src/assets/images/image-product-4-thumbnail.jpg",
];

export const Carousel = (): JSX.Element => {
  const pagination = {
    bulletElement: "img",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<img src="' +
        carouselThumbnails[index] +
        '" class="' +
        className +
        '"/>'
      );
    },
  };

  const CarouselImages = useMemo(
    () =>
      carouselImagesPaths.map((path, index) => (
        <SwiperSlide key={index}>
          <img src={path} alt="product name" />
        </SwiperSlide>
      )),
    []
  );

  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {CarouselImages}
      </Swiper>
    </>
  );
};

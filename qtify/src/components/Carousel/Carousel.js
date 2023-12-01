import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarsouselLeftNavigation from "./CarsouselLeftNavigation/CarsouselLeftNavigation";
import CarsouselRightNavigation from "./CarsouselRightNavigation/CarsouselRightNavigation";
import styles from "../Carousel/Carsousel.module.css";

const Navigation = Swiper.Navigation;
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0,1);
  }, [data]);
  return <></>
};

const Carsousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={Navigation}
        slidesPerView={'auto'}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarsouselLeftNavigation />
        <CarsouselRightNavigation />
        {data.map((item) => {
          return <SwiperSlide>{renderComponent(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
export default Carsousel;

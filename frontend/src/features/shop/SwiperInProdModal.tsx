import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper/styles/styles.css';
SwiperCore.use([Virtual, Navigation, Pagination]);

function SwiperInProdModal(): JSX.Element {
  const { prodImgs } = useSelector((store: RootState) => store.productsState);

  return (
    <>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={1}
        // centeredSlides={true}
        spaceBetween={0}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >
        {prodImgs?.map((prodImg, index) => (
          <SwiperSlide key={uuidv4()} virtualIndex={index}>
            {prodImg && <img src={`${prodImg}`} alt="img" />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperInProdModal;

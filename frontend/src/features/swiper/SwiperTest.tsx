import React, { useRef, useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import EventCard from '../events/EventCard';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/styles.css';
SwiperCore.use([Virtual, Navigation, Pagination]);

function SwiperTest(): JSX.Element {
  const [swiperRef, setSwiperRef] = useState<any>(0);
  const { events } = useSelector((store: RootState) => store.eventState);
  return (
    <>
      <span
        className="text-primary mb-2 block text-lg font-semibold"
        style={{
          marginTop: '5vh',
          marginBottom: '5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Прошедшие
      </span>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {events.map((event, index) =>
          event.isActive === false ? (
            <SwiperSlide key={event.id} virtualIndex={index}>
              {/*{slideContent}*/}
              <EventCard event={event} />
            </SwiperSlide>
          ) : (
            <></>
          )
        )}
      </Swiper>
    </>
  );
}

export default SwiperTest;

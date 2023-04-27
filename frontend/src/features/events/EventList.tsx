import React, { useEffect } from 'react';
import EventCard from './EventCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Outlet } from 'react-router-dom';
import AddEvent from './AddEvent';
import SwiperTest from '../swiper/SwiperTest';

function EventList(): JSX.Element {
  const { events } = useSelector((store: RootState) => store.eventState);
  const { user } = useSelector((store: RootState) => store.auth);

 
  return (
    <>
      <div>
        <section className="pt-20 pb-10 lg:pt-[10px] lg:pb-20">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[800px] text-center lg:mb-0">
                  <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] eventsHeader">
                    <span className="events-word">Мероприятия </span>
                    <span className="company-word">Разделяйки</span>
                  </h2>
                  <p className="text-body-color text-base subTitle">
                    Жить экологично – это просто, если каждый начнёт с себя!
                  </p>
                  <span
                    className="text-primary mb-2 block text-lg font-semibold"
                    style={{ marginTop: '5vh' }}>
                    сейчас
                  </span>
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap" style={{ marginTop: '10vh' }}>
              {events?.map((event) =>
                event.isActive === true ? <EventCard key={event.id} event={event} /> : <></>
              )}
            </div>
          </div>
        </section>
        <SwiperTest />
      </div>
      {Object.values(user).includes(1) && <AddEvent />}
      {/* {'id' in user === 1 && <AddEvent />} */}
      {/* {user.id === 1 ? <AddEvent /> : <></>} */}
    </>
  );
}

export default EventList;

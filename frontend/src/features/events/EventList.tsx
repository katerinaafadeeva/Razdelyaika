import React from 'react';
import EventCard from './EventCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Outlet } from 'react-router-dom';
import AddEvent from './AddEvent';

function EventList(): JSX.Element {
  const { events } = useSelector((store: RootState) => store.eventState);
  return (
    <>
      <div>
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="text-primary mb-2 block text-lg font-semibold">сейчас</span>
                  <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                    Мероприятия Разделяйки
                  </h2>
                  <p className="text-body-color text-base">
                    Жить экологично – это просто, если каждый начнёт с себя!
                  </p>
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              {events?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <AddEvent />
    </>
  );
}

export default EventList;

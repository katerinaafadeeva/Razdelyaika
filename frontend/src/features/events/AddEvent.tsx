import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addEvent } from './eventSlice';
import EventUploader from '../uploader/EventUploader';

function AddEvent(): JSX.Element {
  const dispatch = useAppDispatch();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [eventAddress, setEventAddress] = useState('');
  const [eventDate, setEventDate] = useState('');

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    // const newEvent = { eventName, eventDescription, eventAddress, eventDate };
    // dispatch(addEvent(newEvent));
    dispatch(addEvent(data));
  };

  return (
    <form className="addEventForm" onSubmit={onHandleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Название мероприятия
            </label>
            <input
              type="text"
              required
              name="eventName"
              placeholder="Название"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Описание
            </label>
            <input
              type="text"
              required
              name="eventDescription"
              placeholder="Опишите мероприятие"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Дополнительные ссылки
            </label>
            <input
              type="text"
              name="detailsLink"
              placeholder="Ссылка на сторонний ресурс"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Адрес проведения
            </label>
            <input
              type="text"
              name="eventAddress"
              required
              placeholder="Адрес"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={eventAddress}
              onChange={(e) => setEventAddress(e.target.value)}
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Время проведения
            </label>
            <input
              type="datetime-local"
              name="time"
              required
              placeholder="Дата"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <EventUploader />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
        Добавить
      </button>
    </form>
  );
}

export default AddEvent;

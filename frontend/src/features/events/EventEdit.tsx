import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { editEvent } from './eventSlice';
import { useParams } from 'react-router-dom';
import { EventUpd } from './types/Event';
import { useSelector } from 'react-redux';
import { Event } from './types/Event';

function EventEdit(): JSX.Element {
  const dispatch = useAppDispatch();
  const events = useSelector((store: RootState) => store.eventState.events);

  const { eventId } = useParams();
  const { user } = useSelector((store: RootState) => store.auth);
  const [event] = events?.filter((el) => el.id === Number(eventId));

  console.log('event', event);
  console.log('eventId', eventId);

  const [updeventName, setUpdEventName] = useState(event?.eventName);
  const [updeventDescr, setUpdEventDescr] = useState(event?.eventDescription);
  const [updeventAddress, setUpdEventAddress] = useState(event?.eventAddress);
  const [updeventLink, setUpdEventLink] = useState(event?.eventLink);
  const [updeventDate, setUpdEventDate] = useState(event?.eventDate);
  const [isActiveUpd, setIsActiveUpd] = useState(true);

  const onHandleClickStatus = (): void => {
    setIsActiveUpd((prev) => !prev);
  };

  const onSubmitCheck = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(
      editEvent({
        id: Number(eventId),
        eventName: updeventName,
        eventDescription: updeventDescr,
        eventAddress: updeventAddress,
        eventDate: updeventDate,
        detailsLink: updeventLink,
        isActive: isActiveUpd,
      })
    );
    setUpdEventName('');
    setUpdEventDescr('');
    setUpdEventAddress('');
    setUpdEventDate('');
    setUpdEventLink('');
    setIsActiveUpd(true);
  };

  return (
    <form onSubmit={onSubmitCheck}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Название мероприятия
            </label>
            <input
              type="text"
              placeholder="Название"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={updeventName}
              onChange={(e) => setUpdEventName(e.target.value)}
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Описание
            </label>
            <input
              type="text"
              placeholder="Опишите мероприятие"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={updeventDescr}
              onChange={(e) => setUpdEventDescr(e.target.value)}
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Дополнительные ссылки
            </label>
            <input
              type="text"
              name="detailsLink"
              // placeholder="Ссылка на сторонний ресурс"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={updeventLink}
              onChange={(e) => setUpdEventLink(e.target.value)}
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Адрес проведения
            </label>
            <input
              type="text"
              placeholder="Адрес"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={updeventAddress}
              onChange={(e) => setUpdEventAddress(e.target.value)}
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Дата проведения
            </label>
            <input
              type="date"
              placeholder="Дата"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={updeventDate}
              onChange={(e) => setUpdEventDate(String(e.target.value))}
            />
            <label
              htmlFor="checkboxLabelTwo"
              className="flex cursor-pointer select-none items-center"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabelTwo"
                  className="sr-only"
                  onClick={onHandleClickStatus}
                />
                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              Мероприятия прошло
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Изменить
      </button>
    </form>
  );
}

export default EventEdit;

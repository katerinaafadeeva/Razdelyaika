import React from 'react';
import { Event } from './types/Event';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../store';
import { removeEvent } from './eventSlice';

import './style/style.css';

function EventCard({ event }: { event: Event }): JSX.Element {
  const dispatch = useAppDispatch();
  const onHandleClickDel = (): void => {
    dispatch(removeEvent(event.id));
  };
  console.log(event);
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 forSlicer">
      <div className="mx-auto mb-10 max-w-[550px]">
        <div className="mb-8 overflow-hidden rounded">
          <img
            src={`${event['eventPhotos.file']}`}
            alt="event_image"
            className="w-full"
            style={{ maxWidth: '500px' }}
          />
        </div>
        <div>
          <h3>
            <Link
              to={`/events/${event.id}`}
              // onClick={}
              className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
              {event.eventName}
            </Link>
          </h3>
          <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
            {event.eventDate}
          </span>
          {/* <p className="text-body-color text-base">{event.eventAddress}</p> */}
          <button type="button" onClick={onHandleClickDel}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

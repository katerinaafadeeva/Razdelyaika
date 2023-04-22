import React from 'react';
import { Event } from './types/Event';

function EventCard({ event }: { event: Event }): JSX.Element {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mx-auto mb-10 max-w-[370px]">
        <div className="mb-8 overflow-hidden rounded">
          <img
            src={`${event['eventPhotos.file']}`}
            alt="image"
            className="w-full"
          />
        </div>
        <div>
          <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
            {event.eventDate}
          </span>
          <h3>
            <a
              href={`/events/${event.id}`}
              className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {event.eventName}
            </a>
          </h3>
          <p className="text-body-color text-base">{event.eventAddress}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

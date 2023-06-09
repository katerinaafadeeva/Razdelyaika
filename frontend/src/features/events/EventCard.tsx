import React, { useState } from 'react';
import { Event } from './types/Event';
import { Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../../store';
import { removeEvent } from './eventSlice';

import './style/style.css';
import { useSelector } from 'react-redux';
import EventDelSolutModal from '../modals/EventDelSolutModal';

function EventCard({ event }: { event: Event }): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const onHandleClickDel = (): void => {
    dispatch(removeEvent(event.id));
  };

  const [solut, setSolut] = useState(false);
  const showSolutModal = (): void => {
    setSolut((prev) => !prev);
  };
  const admin = 1;
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 forSlicer">
        <div className="mx-auto mb-10 max-w-[550px]">
          <div className="mb-8 overflow-hidden rounded min__h">
            <img
              src={`${event['eventPhotos.file']}`}
              alt="event_image"
              className="w-full min__h"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>
              <Link
                to={`/events/${event.id}`}
                // onClick={}
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {event.eventName}
              </Link>
            </h3>
            <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              {event.eventDate}
            </span>
            {/* <p className="text-body-color text-base">{event.eventAddress}</p> */}
            {'id' in user && Number(user?.id) === admin ? (
              <button type="button" onClick={showSolutModal}>
                DELETE
              </button>
            ) : (
              <p></p>
            )}{' '}
            :
          </div>
        </div>
      </div>
      {solut && (
        <EventDelSolutModal
          showSolutModal={showSolutModal}
          onHandleClickDel={onHandleClickDel}
        />
      )}
    </>
  );
}

export default EventCard;

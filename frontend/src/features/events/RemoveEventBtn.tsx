import React from 'react';
import { useAppDispatch } from '../../store';
import { removeEvent } from './eventSlice';

function RemoveEventBtn({ eventId }: { eventId: number }): JSX.Element {
  console.log(eventId);
  const dispatch = useAppDispatch();
  const onHandleClickDel = (): void => {
    dispatch(removeEvent(eventId));
  };

  return <button onClick={onHandleClickDel}>DELETE</button>;
}

export default RemoveEventBtn;

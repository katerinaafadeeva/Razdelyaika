import { FC, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { iNotification } from './types/Notic';
import { setType } from './notificationSlice';
import { useAppDispatch } from '../../store';

const Notification: FC<iNotification> = ({ message, type }) => {
  const containerEl = document.getElementById('notification-root');
  const [notificationMsg, setNotificationMsg] = useState('');
  const [notificationClass, setNotificationClass] = useState('notification mb-2');
  const dispatch = useAppDispatch();
  const notificationEl = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // Add class to element based on type
  const addTypeClass = (): void => {
    if (type === 'success') {
      setType('notification mb-2 is-primary');
    }
    if (type === 'danger') {
      setNotificationClass('notification mb-2 is-danger');
    }
    if (type === 'warning') {
      setNotificationClass('notification mb-2 is-warning');
    }
  };

  // Update notification when message changes
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      if (notificationEl.current) {
        notificationEl.current.style.opacity = '0';
      }
      setTimeout(() => {
        setNotificationMsg(message);
        addTypeClass();
        setTimeout(() => {
          if (notificationEl.current) {
            notificationEl.current.style.opacity = '1';
            timeout.current = setTimeout(() => {
              removeNotification();
            }, 5000);
          }
        }, 20);
      }, 300);
    } else {
      setNotificationMsg(message);
      addTypeClass();
      setTimeout(() => {
        if (notificationEl.current) {
          notificationEl.current.style.opacity = '1';
          timeout.current = setTimeout(() => {
            removeNotification();
          }, 5000);
        }
      }, 20);
    }
    // eslint-disable-next-line
  }, [message]);

  // Remove notification
  const removeNotification = (): void => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (notificationEl.current) {
      notificationEl.current.style.opacity = '0';
    }
    setTimeout(() => {
      dispatch(setType({ message: '', type: 'success' }));
    }, 300);
  };

  const output = (
    <div className={notificationClass} ref={notificationEl}>
      <button className="delete" onClick={removeNotification}></button>
      {notificationMsg}
    </div>
  );

  return containerEl ? ReactDOM.createPortal(output, containerEl) : null;
};

export default Notification;

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export type iNotification = {
  message: string;
  type: 'success' | 'danger' | 'warning';
};

type SetNotificationAction = {
  type: typeof SET_NOTIFICATION;
  payload: iNotification;
};

export type NotificationAction = SetNotificationAction;

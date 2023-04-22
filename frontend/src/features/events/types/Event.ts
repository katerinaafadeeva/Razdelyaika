export type Event = {
  id: number;
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
  isActive: boolean;
  [key: string]: any;
};

export type EventId = Event['id'];

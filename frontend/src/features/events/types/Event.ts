export type Event = {
  id: number;
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
  detailsLink: string;
  isActive: boolean;
  [key: string]: any;
};

export type EventId = Event['id'];

export type EventAdd = {
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
  // detailsLink: string;
};

export type EventUpd = {
  id: number;
  eventName: string;
  eventDescription: string;
  eventAddress: string;
  eventDate: string;
  detailsLink: string;
  isActive: boolean;
};

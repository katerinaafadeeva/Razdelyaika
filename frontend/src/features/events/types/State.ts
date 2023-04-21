import { Event } from './Event';

export type State = {
  events: Event[];
  error: string | undefined;
};

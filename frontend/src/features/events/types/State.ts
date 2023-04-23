import { Comment } from '../comment/types/Comment';
import { Event } from './Event';

export type State = {
  events: Event[];
  eventComments: Comment[];
  error: string | undefined;
};

import { Imgs } from '../../shop/types/Img';
import { Comment } from '../comment/types/Comment';
import { Event } from './Event';

export type State = {
  events: Event[];
  imgs: Imgs;
  eventComments: Comment[];
  error: string | undefined;
};

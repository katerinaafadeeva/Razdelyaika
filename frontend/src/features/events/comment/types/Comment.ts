import { User } from '../../../auth/types/types';
import { EventId } from '../../types/Event';

export type Comment = {
  id: number;
  eventId: EventId;
  eventRevText: string;
  userId: number;
  createdAt: string;
  'User.userName': string;
};
export type CommentId = Comment['id'];

import { EventId } from '../../types/Event';

export type Comment = {
  id: number;
  eventId: EventId;
  eventRevText: string;
  userId: number;
};
export type CommentId = Comment['id'];

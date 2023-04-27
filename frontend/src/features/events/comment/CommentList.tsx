import React, { useEffect } from 'react';
import './styles/styles.css';
import CommentEvent from './CommentEvent';
import FormAddComment from './FormAddComment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getComment } from '../eventSlice';

function CommentList({ eventId }: { eventId: number }): JSX.Element {
  const commentsIsBase = useSelector(
    (store: RootState) => store.eventState.eventComments
  );

  const comments = commentsIsBase.filter(
    (comment) => comment.eventId === eventId
  );

  return (
    <>
      <div className="scroll_div">
        <div className="comment-container theme--light">
          <div className="comments">
            <div
              className="card v-card v-sheet theme--light elevation-2"
              style={{ height: '280px' }}
            >
              <span className="headline">Оставить коментарий</span>
              <div className="sign-in-wrapper">
                <FormAddComment />
                <p className="error-message"></p>
              </div>
            </div>
            <div>
              {comments?.map((comment) => (
                <CommentEvent key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentList;

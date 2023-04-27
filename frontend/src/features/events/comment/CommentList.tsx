import React, { useEffect } from 'react';
import './styles/styles.css';
import CommentEvent from './CommentEvent';
import FormAddComment from './FormAddComment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getComment } from '../eventSlice';

function CommentList({ eventId }: { eventId: number }): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);

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
              {'id' in user ? (
                <>
                  <span className="headline">Оставить коментарий</span>
                  <FormAddComment />
                </>
              ) : (
                <div className="sign-in-wrapper">
                  <p style={{ paddingLeft: '70px', fontSize: '20px' }}>
                    Чтобы оставить комментарий -{' '}
                    <a
                      href="/signup"
                      style={{ color: '#238349', fontWeight: '500' }}
                    >
                      зарегистрируйтесь
                    </a>{' '}
                    или{' '}
                    <a
                      href="/signin"
                      style={{ color: '#238349', fontWeight: '500' }}
                    >
                      войдите
                    </a>
                  </p>
                  <p className="error-message"></p>
                </div>
              )}
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

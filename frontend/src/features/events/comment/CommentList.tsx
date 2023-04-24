import React, { useEffect } from 'react';
import './styles/styles.css';
import CommentEvent from './CommentEvent';
import FormAddComment from './FormAddComment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getComment } from '../eventSlice';

function CommentList({ eventId }: { eventId: number }): JSX.Element {
  const commentsIsBase = useSelector((store: RootState) => store.eventState.eventComments);

  const comments = commentsIsBase.filter((comment) => comment.eventId === eventId);

  return (
    <>
      <div className="comment-container theme--light">
        <div className="comments">
          <div className="card v-card v-sheet theme--light elevation-2">
            <span className="headline">Оставить коментарий</span>
            <div className="sign-in-wrapper">
              <FormAddComment />
              <p className="error-message"></p>
            </div>
          </div>
          <div>
            {/*<div className="card v-card v-sheet theme--light elevation-2">
              <div className="header">
                <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
                  <img src="https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=70" />
                </div>
                <span className="displayName title">John Doe</span>{' '}
                <span className="displayName caption">2 days ago</span>
              </div>

              <div className="wrapper comment">
                <p>
                  Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae,
                  porta ut est.
                </p>
              </div>
              <div className="actions"></div>
              <div className="v-dialog__container" style={{ display: 'block' }}></div>
            </div>

            <div className="answers"></div>
          </div>
          <div>
            <div className="card v-card v-sheet theme--light elevation-2">
              <div className="header">
                <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
                  <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=70" />
                </div>
                <span className="displayName title">Albert Arja</span>{' '}
                <span className="displayName caption">15 days ago</span>
              </div>

              <div className="wrapper comment">
                <p>
                  Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae,
                  porta ut est.
                </p>
                <p>Thanks You.</p>
              </div>
              <div className="actions"></div>
              <div className="v-dialog__container" style={{ display: 'block' }}></div>
            </div>

            <div className="answers"></div>
          </div>
          <div>
            <div className="card v-card v-sheet theme--light elevation-2">
              <div className="head er">
                <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
                  <img src="https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=70" />
                </div>
                <span className="displayName title">Robert</span>{' '}
                <span className="displayName caption">2 months ago</span>
              </div>

              <div className="wrapper comment">
                <p>
                  Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae,
                  porta ut est.
                </p>
                <p>
                  Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae,
                  porta ut est.
                </p>
              </div>
              <div className="actions"></div>
              <div className="v-dialog__container" style={{ display: 'block' }}></div>
            </div>*/}

            <div className="answers"></div>
            {comments?.map((comment) => (
              <CommentEvent key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentList;

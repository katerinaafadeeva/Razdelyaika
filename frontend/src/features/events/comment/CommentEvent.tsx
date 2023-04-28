import React, { useEffect, useState } from 'react';
import { Comment } from './types/Comment';
import { useSelector } from 'react-redux';

import { removeComment } from '../eventSlice';

import { ReactNotifications, Store } from 'react-notifications-component';

import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import { RootState, useAppDispatch } from '../../../store';
function CommentEvent({ comment }: { comment: Comment }): JSX.Element {
  const [name, setName] = useState(comment['User.userName']);
  const userName = useSelector((state: RootState) => state.auth.user);
  const { user } = useSelector((store: RootState) => store.auth);

  const date = comment.createdAt.replace(/[-]/gi, '.').slice(0, 10);

  useEffect(() => {
    setName(comment['User.userName']);
  }, [comment, name]);

  const dispatch = useAppDispatch();
  const onHandleClickDelete = (): void => {
    dispatch(removeComment(comment.id));
  };

  return (
    <div>
      <div
        className="card v-card v-sheet theme--light elevation-2"
        style={{ height: '180px' }}
      >
        <div className="header">
          <div
            className="v-avatar avatar"
            style={{ height: '50px', width: '50px' }}
          >
            <img src="https://w1.pngwing.com/pngs/337/122/png-transparent-christmas-tree-symbol-fir-pine-road-logo-spruce-evergreen-natural-environment.png" />
          </div>

          {/* {'id' in userName && <span className="displayName title">{userName?.userName}</span>} */}
          {
            <span className="displayName title">
              {comment['User.userName']}
            </span>
          }
          <span className="displayName caption">{date}</span>
          {Object.values(user)[0] === comment.userId ||
          Object.values(user).includes(1) ? (
            <button
              onClick={() => {
                onHandleClickDelete();
              }}
              className="displayName caption"
            >
              Удалить
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="wrapper comment">
          <p>{comment.eventRevText}</p>
        </div>
        <div className="actions"></div>
        <div className="v-dialog__container" style={{ display: 'block' }}></div>
      </div>
      <div className="answers"></div>
    </div>
  );
}

export default CommentEvent;

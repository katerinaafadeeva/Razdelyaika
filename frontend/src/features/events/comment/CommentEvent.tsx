import React, { useEffect, useState } from 'react';
import { Comment } from './types/Comment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { User } from '../../auth/types/types';
import { removeComment } from '../eventSlice';

function CommentEvent({ comment }: { comment: Comment }): JSX.Element {
  const [name, setName] = useState(comment['User.userName']);
  const userName = useSelector((state: RootState) => state.auth.user);

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
      <div className="card v-card v-sheet theme--light elevation-2" style={{ height: '180px' }}>
        <div className="header">
          <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
            <img src="https://w1.pngwing.com/pngs/337/122/png-transparent-christmas-tree-symbol-fir-pine-road-logo-spruce-evergreen-natural-environment.png" />
          </div>

          {'id' in userName && <span className="displayName title">{userName?.userName}</span>}
          <span className="displayName caption">{date}</span>
          <button onClick={onHandleClickDelete} className="displayName caption">
            Удалить
          </button>
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

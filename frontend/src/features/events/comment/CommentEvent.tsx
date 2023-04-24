import React, { useEffect, useState } from 'react';
import { Comment } from './types/Comment';

function CommentEvent({ comment }: { comment: Comment }): JSX.Element {
  const date = comment.createdAt.replace(/[-]/gi, '.').slice(0, 10);

  const [name, setName] = useState(comment['User.userName']);

  useEffect(() => {
    setName(comment['User.userName']);
  }, [comment]);

  return (
    <div>
      <div className="card v-card v-sheet theme--light elevation-2">
        <div className="header">
          <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
            <img src="https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=70" />
          </div>

          <span className="displayName title">{name}</span>
          <span className="displayName caption">{date}</span>
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

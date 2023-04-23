import React from 'react';

function CommentEvent(): JSX.Element {
  return (
    <div>
      <div className="card v-card v-sheet theme--light elevation-2">
        <div className="header">
          <div className="v-avatar avatar" style={{ height: '50px', width: '50px' }}>
            <img src="https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=70" />
          </div>
          <span className="displayName title">John Doe</span>{' '}
          <span className="displayName caption">2 days ago</span>
        </div>

        <div className="wrapper comment">
          <p>
            Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta
            ut est.
          </p>
        </div>
        <div className="actions"></div>
        <div className="v-dialog__container" style={{ display: 'block' }}></div>
      </div>

      <div className="answers"></div>
    </div>
  );
}

export default CommentEvent;

import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { addCommentEvent } from '../eventSlice';
import { useParams } from 'react-router-dom';

function FormAddComment(): JSX.Element {
  const [text, setText] = useState('');
  const { eventId } = useParams();

  const dispatch = useAppDispatch();

  const onHandleSubmitCommit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(addCommentEvent({ eventId: Number(eventId), eventRevText: text }));
    setText('');
  };

  return (
    <form onSubmit={onHandleSubmitCommit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <div className="relative">
              <textarea
                required
                rows={3}
                placeholder="Ваш коментарий"
                className="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] w_size"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Написать
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormAddComment;

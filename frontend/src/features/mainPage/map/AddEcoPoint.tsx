import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { addEcoPoint } from './mapSlice';
import './styles/Map.css';

function AddEcoPoint(): JSX.Element {
  const [ecoPointName, setEcoPointName] = useState('');
  const [ecoPointAdress, setEcoPointAdress] = useState('');
  //  console.log(ecoPointAdress);

  const dispatch = useAppDispatch();
  const onHandleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const ecoPoint = {
      pointName: ecoPointName,
      pointAddress: ecoPointAdress,
    };
    dispatch(addEcoPoint(ecoPoint));
  };

  return (
    <form onSubmit={onHandleSubmitForm}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 ">
          <div className="mb-12">
            <input
              type="text"
              placeholder="Адрес"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={ecoPointAdress}
              onChange={(e) => setEcoPointAdress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-primary border-primary hover:bg-primary hover:border-primary inline-flex items-center justify-center rounded-md border py-4 px-10 text-center text-base transition hover:text-white lg:px-8 xl:px-10">
        Добавить контейнер
      </button>
    </form>
  );
}

export default AddEcoPoint;

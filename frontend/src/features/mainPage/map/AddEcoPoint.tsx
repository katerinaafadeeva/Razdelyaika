import React, { useState } from 'react';

function AddEcoPoint(): JSX.Element {
  const [ecoPointName, setEcoPointName] = useState('');
  const [ecoPointAdress, setEcoPointAdress] = useState('');
  //  console.log(ecoPointAdress);
  const onHandleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onHandleSubmitForm}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <input
              type="text"
              placeholder="Название точки"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={ecoPointName}
              onChange={(e) => setEcoPointName(e.target.value)}
            />
          </div>
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

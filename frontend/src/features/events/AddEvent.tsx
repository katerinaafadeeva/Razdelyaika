import React from 'react';

function AddEvent(): JSX.Element {
  return (
    <form onChange={}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Название мероприятия
            </label>
            <input
              type="text"
              placeholder="Название"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Описание
            </label>
            <input
              type="text"
              placeholder="Опишите мероприятие"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Адрес проведения
            </label>
            <input
              type="text"
              placeholder="Адрес"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
            <label htmlFor="" className="mb-3 block text-base font-medium text-black">
              Дата проведения
            </label>
            <input
              type="date"
              placeholder="Дата"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
        Добавить
      </button>
    </form>
  );
}

export default AddEvent;

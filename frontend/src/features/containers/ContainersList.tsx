import React from 'react';
import './styles/containers.css';

function ContainersList(): JSX.Element {
  return (
    <div className="main-containers">
      <div className="containers-header">
        <h1 className="okay-container">Окей.Что делать?</h1>
        <h3 className="heading-containers">
          Изучи простой алгоритм действий, чтобы понимать весь процесс
          подготовки вторсырья.
        </h3>
      </div>
      <div className="section-num-containers">
        <div className="info-div-containers-one">
          <h1 className="num-containers">#1</h1>
          <h2 className="num-one-containers">Проанализируй свой мусор.</h2>
          <h3 className="num-one-containers-text">
            Чтобы ты точно понимал, что делать с каждым фантиком и бутылкой, мы
            создали подробную инструкцию по сортировке мусора. Если у тебя
            появятся вопросы, то смело пиши нам в Instagram и ВКонтакте, мы
            ответим на все вопросы, но сначала ознакомься с инструкцией, чтобы
            мы говорили на одном языке
          </h3>
        </div>
        <div className="info-div-containers-two">
          <h1 className="num-containers">#2</h1>
          <h2 className="num-one-containers-two">Сортируй вторсырье.</h2>
          <h3 className="num-one-containers-text">
            Делай это как тебе удобно, главное, чтобы все категории были
            отдельно друг от друга и не перемешивались, так как одна неверно
            брошенная ПВХ-обертка может испортить целую партию вторсырья.
          </h3>
          <div className="info-icon-div">
            <span className="material-symbols-outlined">info</span>
            <p className="icon-text">
              Мусор должен быть чистым и не иметь запаха
            </p>
          </div>
        </div>
        <div className="info-div-containers-three">
          <h1 className="num-containers-three">#3</h1>
          <h2 className="num-one-containers-three">Приходи на акцию.</h2>
          <h3 className="num-one-containers-text-three">
            Акция проходит каждое третье воскресенье месяца по всему городу.
            Смотри карту и находи ближайшую к себе точку. Анонсы о проведении
            акций публикуются в группе{' '}
            <a href="https://vk.com/razdelyaika74" style={{ color: '#2f6099' }}>
              ВКонтакте
            </a>{' '}
            и на странице Instagram и на странице сайта. На акцию нужно
            приходить уже с рассортированным мусором, чтобы не тратить время
            волонтеров на акции.
          </h3>
          <div className="info-icon-div">
            {/* <span className="material-symbols-outlined">question_mark</span> */}
            <p className="icon-info-link">
              Акция слишком далеко? Становись куратором и открывай новую точку!
            </p>
          </div>
          <div className='btn-become-div'>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScA88UQ9ZDdgoEhdXPKecCk8w4nOVXJ1RLNfeZ6U8tjHk47Mw/viewform"
              className="becomevolunteer-btn"
            >
              Стать куратором
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainersList;

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Events',
      [
        {
          eventName: 'Стартует новый сезон "Чистых игр"!',
          eventDescription:
            'Челябинцы сразятся за звание лучших в битве за чистоту! Самый масштабный проект по сбору и сортировке мусора снова в Челябинске! Необходима предварительная регистрация по ссылке, указанной ниже.',
          eventAddress: 'Челябинск, Первое озеро "Восточный пляж"',
          eventDate: '22 апреля 2023 11:00',
          detailsLink:
            'https://cleangames.org/game/fa1339a0-cfa9-11ed-858a-61dd0cc30d41',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: 'Субботник Челябинских чистоменов',
          eventDescription:
            'Стартует новый сезон «Чистых игр» - челябинцы сразятся за звание лучших в битве за чистоту! Самый масштабный проект по сбору и сортировке мусора снова в Челябинске! Подробности по ссылке, указанной ниже.',
          eventAddress:
            'Челябинск, Изумрудный карьер, место сбора - парковка возле санатория "Волна"',
          eventDate: '23 апреля 2023 года 10:00',
          detailsLink: 'https://vk.com/wall-166090438_3336',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: 'Очередная акция "Разделяйка"!',
          eventDescription:
            'Сегодня, 16 апреля, состоится очередная акция "Разделяйка"! Мужчины, напоминаем: пожалуйста, помогите в погрузке вторсырья после акции и разгрузке в Экоцентре (с 12.30 до 13.30)! Также всех участников призываем по возможности присоединиться к волонтерам хоть на полчаса - будет ощутимая помощь!',
          eventAddress: 'Площадки Челябинска и Копейска',
          eventDate:
            'С 11.00 до 12.45 в Экоцентре и на других точках (см. фото) и с 10.30 до 12.00 в Новосинеглазово',
          detailsLink: '',
          isActive: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName:
            'Акция по раздельному сбору в Кременкульском сельском поселении!',
          eventDescription:
            '15 апреля 2023, в День экологических знаний, на территории с. Кременкуль пройдёт акция по сбору вторсырья «Знай и разделяй. Живи и сохраняй!». В акции могут принимать участие все граждане, проживающие на территории Кременкульского сельского поселения, независимо от возраста. В соревнованиях по сбору и сдаче вторичных материальных ресурсов (бумага, пластик, стекло, жесть) могут принимать участие все желающие жители Кременкульского сельского поселения. Участники приносят отсортированные и собранные отходы 15 апреля 2023 года на площадку перед скейт-парком с. Кременкуль, , где будет проводится взвешивание собранного вторсырья и определение победителей соревновательного сбора вторсырья «Знай и разделяй. Живи и сохраняй».',
          eventAddress: 'На парковке возле скейт-парка, с. Кременкуль',
          eventDate: '15 апреля 2023 в 12:00',
          detailsLink: '',
          isActive: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};

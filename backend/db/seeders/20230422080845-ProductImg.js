'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductImgs',
      [
        {
          productImgId: 2,
          productImg:
            'https://ae04.alicdn.com/kf/H432594dd086f4350aafc093462ae22dck.jpg_640x640.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productImgId: 1,
          productImg:
            'https://static.insales-cdn.com/images/products/1/3394/673418562/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%B4%D1%8038214.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productImgId: 3,
          productImg:
            'https://avatars.mds.yandex.net/get-mpic/5235967/img_id3841509036503069964.jpeg/orig',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImg', null, {});
  },
};

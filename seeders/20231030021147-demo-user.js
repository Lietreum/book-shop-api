"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama: "Iurie",
        alamat: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Faris",
        alamat: "Logam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Girti",
        alamat: "Cimahi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Azka",
        alamat: "Antapani",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
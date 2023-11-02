"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        Judul: "Bumi Manusia",
        Penerbit: "Pramoedya Ananta Toer",
        Deskripsi: "Pria Jawa",
        Gambar: "img.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Laskar Pelangi",
        Penerbit: "Andrea Hirata",
        Deskripsi: "Desa Kecil",
        Gambar: "img.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
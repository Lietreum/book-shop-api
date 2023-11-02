const { Book } = require("../models");

const findAllBooks = async (req, res) => {
  try {
    const data = await Book.findAll();
    res.json({
      message: "Data retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching book data: " + error.message,
    });
  }
};

const detailBook = async (req, res) => {
  try {
    let id = parseInt(req.body.id);
    const data = await Book.findByPk(id);
    if (data) {
      res.json({
        message: "Book found successfully",
        data: data,
      });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching book data: " + error.message,
    });
  }
};

const tambahBuku = async (req, res) => {
  try {
    const data = req.body;
    const result = await Book.create(data);
    res.json({
      message: "Book added successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while adding book: " + error.message,
    });
  }
};

const deleteBuku = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      message: "Book successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting book: " + error.message,
    });
  }
};

const updateBuku = async (req, res) => {
  try {
    const id = req.body.id;
    const newData = req.body;
    const result = await Book.update(newData, {
      where: {
        id: id,
      },
    });
    if (result[0] === 1) {
      res.json({
        message: "Book updated successfully",
        data: newData,
      });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while updating book: " + error.message,
    });
  }
};

module.exports = {
  findAllBooks,
  detailBook,
  tambahBuku,
  deleteBuku,
  updateBuku,
};

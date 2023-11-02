const router = require("express").Router();
const { findAllBooks,detailBook, tambahBuku, deleteBuku, updateBuku } = require("../controllers/BookController");
const { findAllUsers, detailUser, tambahUser, deleteUser, updateUser } = require("../controllers/UserController");

router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/deletebook", deleteBuku);
router.put("/updatebook", updateBuku);

//users
router.get("/user", findAllUsers);
router.get("/user:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);


module.exports = router;
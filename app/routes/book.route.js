const express = require("express");
const book = require("../controllers/book.controller");

const router = express.Router();

router.route("/")
    .post(book.create)
    .get(book.findAll)
    .delete(book.deleteAll);
 
router.route("/favorite")
    .get(book.findAllFavorite);

router.route("/:id")
    .get(book.findOne)
    .put(book.update)
    .delete(book.delete);

module.exports = router;
const express = require("express");

const docgia = require("../controllers/docgia.controller");
const router = express.Router();

router.route("/")
        .get(docgia.findAll)
        .post(docgia.create);
router.route("/:id")
        .get(docgia.getUserInfoById)
        .put(docgia.update)
        .delete(docgia.delete);
router.route("/login").post(docgia.login);
module.exports = router;

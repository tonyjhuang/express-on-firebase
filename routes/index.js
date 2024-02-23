var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express 2", env: process.env.TEST_ENV });
});

module.exports = router;

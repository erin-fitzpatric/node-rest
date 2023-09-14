const express = require("express");
const router = express.Router();
const boards = require("./boards");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("<p>HTML Data</p>");
});

router.use(boards);

module.exports = router;

const router = require('express').Router();
const boards = require('../controllers/boards');

/* POST boards. */
router.post("/boards", boards.create);

/* PUT boards. */
router.put("/boards/:id", boards.update);

module.exports = router;

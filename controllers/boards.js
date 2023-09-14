const Boards = require("../models/boards");

/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */

/** post boards */
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Bad request. Content can not be empty!",
    });
  }

  // Save board in the database
  try {
    const data = await Boards.create({
      title: req.body.title,
      stage: 1,
    });
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error creating board.",
    });
  }
};

//** put boards */
exports.update = async (req, res) => {
  // Validate Request
  const validStages = [1, 2, 3];
  if (!validStages.includes(req.body.stage)) {
    res.status(400).send();
  }

  try {
    await Boards.update(
      { stage: req.body.stage },
      { where: { id: req.params.id } }
    );
    // Can't believe I have to do this to get the updated row lol
    const updatedRecord = await Boards.findOne({
      where: { id: req.params.id },
    });
    res.status(200).send(updatedRecord);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error updating board.",
    });
  }
};

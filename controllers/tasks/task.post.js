const router = require('express').Router();
const { Task } = require('../../database/models');

router.post(
  '/tasks',
  async (req, res, next) => {
    try {
      const { description } = req.body;
      const task = await Task.create({ description });
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

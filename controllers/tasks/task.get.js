const router = require('express').Router();
const { Task } = require('../../database/models');

router.get(
  '/tasks/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

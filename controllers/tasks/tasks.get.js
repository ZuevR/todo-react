const router = require('express').Router();
const { Task } = require('../../database/models');

router.get(
  '/tasks',
  async (req, res, next) => {
    try {
      const tasks = await Task.findAll({ order: [['created_at', 'ASC']] });
      res.json(tasks);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

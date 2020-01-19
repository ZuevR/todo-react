const router = require('express').Router();
const { Task } = require('../../database/models');

router.patch(
  '/tasks',
  async (req, res, next) => {
    try {
      const { id, description, status } = req.body;
      const result = await Task.update(
        { description, status },
        { where: { id }, returning: true }
      );
      res.json(result[1][0]);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

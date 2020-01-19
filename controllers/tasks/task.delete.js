const router = require('express').Router();
const { Task } = require('../../database/models');

router.delete(
  '/tasks/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Task.destroy({ where: { id } });
      res.json({ message: 'Deleted' });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

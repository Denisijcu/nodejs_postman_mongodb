const express = require('express');
const {
  getBoocamps,
  getBoocamp,
  createBoocamp,
  updateBoocamp,
  deleteBoocamp
} = require('../controllers/bootcamps');
const router = express.Router();

router
  .route('/')
  .get(getBoocamps)
  .post(createBoocamp);
router
  .route('/:id')
  .get(getBoocamp)
  .put(updateBoocamp)
  .delete(deleteBoocamp);

module.exports = router;

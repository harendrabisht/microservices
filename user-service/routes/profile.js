var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profile')

/* GET users listing. */
router.get('/personal-info/:userId', async function(req, res, next) {
  try {
    const {userId} = req.params;
    const result = await profileController.getUserById(userId);
    res.json(result);
  }catch(e) {
    const {statusCode, message} = e;
    res.status(statusCode).send({ message });
  }
});

module.exports = router;

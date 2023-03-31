const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.models.users[req.me.id]);
});

// export default router;
module.exports = router;
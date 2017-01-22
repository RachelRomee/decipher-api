/* DEPENDENCIES INLADEN
------------------------------------------------------- */
const express = require('express');
const router = express.Router();

/* MAIN LEARN ROUTER
------------------------------------------------------- */
router.get('/linechart', function(req, res) {
  res.render('charts/linechart');
});

module.exports = router;

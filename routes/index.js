var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/characters')

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index');
}); */

router.get('/', ctrl.index);
console.log('Routes /')
module.exports = router;

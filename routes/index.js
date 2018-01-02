let express = require('express');
let router = express.Router();
let Cat = require('../cat');


/* GET home page. */
router.get('/', function(req, res, next) {
    let cat = new Cat();

    //cat.meow = '435';
    console.dir(cat.sum(4, 3));
  res.render('index', { title: 'Express' });
});

module.exports = router;

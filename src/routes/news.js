const express = require('express');
const router = express.Router();
   //khai baobien     //function

const newsController = require('../app/controllers/NewsController');

// newsController.index

router.use('/:slug', newsController.show);
router.use('/', newsController.index);



// router.use('/', (req, res) =>{
// 	res.render('news')
// })

module.exports = router;

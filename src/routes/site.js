const express = require('express');
const router = express.Router();
   //khai baobien     //function

const siteController = require('../app/controllers/SiteController');

// siteController.index

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
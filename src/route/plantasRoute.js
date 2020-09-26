const express = require('express');
const router = express.Router();
const controller = require('../controller/plantasController')

router.get('/', controller.getAll);
router.get('/plantas', controller.getAll);
   
module.exports = router;
       
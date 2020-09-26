const express = require('express');
const router = express.Router();
  
router.get('/',(req, res) => {
    res.send({
        arquivo: "Plantas da flora brasileira",
        data: "22/09/2020"
    })
       
});    

module.exports = router;


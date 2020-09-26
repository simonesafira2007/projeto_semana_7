const express = require('express');
const router = express.Router();
     
router.get('/',(req, res) => {
    res.send({
        titulo: "Livros interessantes para leitura",
        data: "21/09/2020"
    })
   
});   

module.exports = router;

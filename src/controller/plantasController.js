const plantas = require('../model/plantas.json');
    
const getAll = (req, res) => {
    console.log(req.url);
    res.send(plantas);
};     

module.exports = { getAll};


const express = require('express');
const app =express();
   
// importar arquivos de rota   
  
const index = require('./route/index');
const plantas = require('./route/plantasRoute')
     
app.use((req, res, next) => {
    console.log('Requisicao realizada');
    
    next()   
});

app.use('/',index);
app.use('/plantas', plantas);

module.exports = app;

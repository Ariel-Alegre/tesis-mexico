
const { Router  }= require('express');
const router = Router();
const {createHome, updateHome, allHome} = require("../controllers/Home");
const {MercadoPago} = require("../controllers/MercadoPago")
const {WebHook} = require("../controllers/WebHook")




 router.post('/home', createHome);
 router.put('/home/:id', updateHome); 
 router.get('/home', allHome);



 router.post("/crear-pago", MercadoPago);
 router.post("/webhook", WebHook);



  


module.exports = router
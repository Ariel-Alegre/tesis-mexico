
const { Router  }= require('express');
const router = Router();
const {createService, updateService, allService} = require("../controllers/Services");



 router.post('/services', createService);
 router.put('/services/:id', updateService); 
 router.get('/services', allService);







module.exports = router
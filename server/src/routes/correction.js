
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/Correction');




router.post('/correction', createRedactionTesis);
 router.put('/correction/:id', updateRedactionTesis); 
 router.get('/correction', allRedactionTesis);

























module.exports = router
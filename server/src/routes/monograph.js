
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/Monograph');




router.post('/monograph', createRedactionTesis);
 router.put('/monograph/:id', updateRedactionTesis); 
 router.get('/monograph', allRedactionTesis);

























module.exports = router
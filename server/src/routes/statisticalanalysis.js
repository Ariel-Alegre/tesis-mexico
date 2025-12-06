
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/StatisticalAnalysis');




router.post('/statisticalanalysis', createRedactionTesis);
 router.put('/statisticalanalysis/:id', updateRedactionTesis); 
 router.get('/statisticalanalysis', allRedactionTesis);

























module.exports = router
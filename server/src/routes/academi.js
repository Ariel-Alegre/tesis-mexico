
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/AcademicAdvising');







 router.post('/academi', createRedactionTesis);
 router.put('/academi/:id', updateRedactionTesis); 
 router.get('/academi', allRedactionTesis);


















module.exports = router
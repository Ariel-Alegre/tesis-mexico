
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/MemoryJob');




router.post('/memoryjob', createRedactionTesis);
 router.put('/memoryjob/:id', updateRedactionTesis); 
 router.get('/memoryjob', allRedactionTesis);

























module.exports = router
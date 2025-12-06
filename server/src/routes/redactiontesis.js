
const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/RedactionTesis');




router.post('/redaction-tesis', createRedactionTesis);
 router.put('/redaction-tesis/:id', updateRedactionTesis); 
 router.get('/redaction-tesis', allRedactionTesis);

























module.exports = router
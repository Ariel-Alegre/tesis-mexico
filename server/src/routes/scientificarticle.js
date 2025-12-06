


const { Router  }= require('express');
const router = Router();


const { createRedactionTesis, updateRedactionTesis, allRedactionTesis  } = require('../controllers/ScientificArticle');




router.post('/scientificarticle', createRedactionTesis);
 router.put('/scientificarticle/:id', updateRedactionTesis); 
 router.get('/scientificarticle', allRedactionTesis);

























module.exports = router
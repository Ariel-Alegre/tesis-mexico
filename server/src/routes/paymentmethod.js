
const { Router  }= require('express');
const router = Router();


const { createPayment, updatePayment, allPayment } = require('../controllers/PaymentMethod');



router.post('/paymentmethod', createPayment);
 router.put('/paymentmethod/:id', updatePayment); 
 router.get('/paymentmethod', allPayment);



















module.exports = router
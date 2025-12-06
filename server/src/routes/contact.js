
const { Router  }= require('express');
const router = Router();


const {Contact} = require('../controllers/Contact');
const {createContact, updateContact, allContact} = require('../controllers/ContactEdit');



router.post('/contact', Contact ) 
router.post('/edit/contact', createContact);
 router.put('/edit/contact/:id', updateContact); 
 router.get('/edit/contact', allContact);



















module.exports = router
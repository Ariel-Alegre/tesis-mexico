
const { Router  }= require('express');
const router = Router();
const {createAbout, updateAbout, allAbout} = require("../controllers/About");



 router.post('/about', createAbout);
 router.put('/about/:id', updateAbout); 

 router.get('/about', allAbout);




module.exports = router
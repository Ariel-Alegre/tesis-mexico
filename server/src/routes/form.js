
const { Router  }= require('express');
const router = Router();

const {FormCotization} = require("../controllers/FormCotization")


 router.post('/cotizacion', FormCotization);







module.exports = router
const { PaymentMethod } = require('../db');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configurar almacenamiento con Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'png',
    public_id: (req, file) =>
      file.originalname.toLowerCase().replace(/\s+/g, '_').replace(/[^\w\-]/g, ''),
  },
});

const upload = multer({ storage }).fields([
  { name: 'imgHeader', maxCount: 1 },
  { name: 'imgDescription', maxCount: 1 }
]);
// Crear nuevo registro
const createPayment = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error en la subida:', err);
      return res.status(400).json({ message: 'Error al subir el archivo', error: err.message });
    }

    try {


      const {
        descriptionHeader,
        descriptionHeader2,
        titleBtnPayment,
        titleImg,
        titleQuotas,
        description,
        description2,
        titleBottom,
        titleBottom2,
    
   

       

        
      } = req.body;

      const newPayment = await PaymentMethod.create({
        descriptionHeader,
        descriptionHeader2,
        titleBtnPayment,
        titleImg,
        titleQuotas,
        description,
        description2,
        titleBottom,
        titleBottom2,
        imgHeader: req.files?.imgHeader?.[0]?.path || '',
        imgDescription: req.files?.imgDescription?.[0]?.path || ''
        

      });

      return res.status(201).json({
        message: 'Registro creado correctamente',
        data: newPayment,
      });
    } catch (error) {
      console.error('Error al crear:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};


// Actualizar un registro existente
const updatePayment = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error en la subida:', err);
      return res.status(400).json({ message: 'Error al subir el archivo', error: err.message });
    }

    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: 'ID es requerido para actualizar' });
      }

      const paymentRecord = await PaymentMethod.findByPk(id);
      if (!paymentRecord) {
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      const updatedData = {
        descriptionHeader: req.body.descriptionHeader,
        descriptionHeader2: req.body.descriptionHeader2,
        titleBtnPayment: req.body.titleBtnPayment,
        titleImg: req.body.titleImg,
        titleQuotas: req.body.titleQuotas,
        description: req.body.description,
        description2: req.body.description2,
        titleBottom: req.body.titleBottom,
        titleBottom2: req.body.titleBottom2,


       
  

      
      };

      if (req.files && req.files.imgHeader && req.files.imgHeader.length > 0) {
        updatedData.imgHeader = req.files.imgHeader[0].path;
      } 

      if (req.files && req.files.imgDescription && req.files.imgDescription.length > 0) {
        updatedData.imgDescription = req.files.imgDescription[0].path;
      } 

      await paymentRecord.update(updatedData);

      return res.status(200).json({
        message: 'Registro actualizado correctamente',
        data: paymentRecord,
      });
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};



const allPayment = async (req, res) => {

    try {
 const allpayment = await PaymentMethod.findAll()

 if (!allpayment) {
  console.log("No hay información guardada en la base de datos")
  res.status(404).send({message: "No hay información guardada en la base de datos"})
  
 } 

 console.log("Hay información guardada en la base de datos")
 res.status(200).send({message: "Hay información guardada en la base de datos", allpayment})
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};
module.exports = { createPayment, updatePayment, allPayment };

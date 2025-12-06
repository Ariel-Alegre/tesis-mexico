const { StatisticalAnalysis } = require('../db');
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
  { name: 'imgDescription', maxCount: 1 },
]);
// Crear nuevo registro
const createRedactionTesis = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error en la subida:', err);
      return res.status(400).json({ message: 'Error al subir el archivo', error: err.message });
    }

    try {


      const {
        title,
        description,
        titleForm,
        titleForm2,
        titleWhy,
        descriptionWhy,
        titleBottom,
        descriptionBlue,
        descriptionBlue2,
        descriptionBlue3

       

        
      } = req.body;

      const newRedactionTesis = await StatisticalAnalysis.create({
        title,
        description,
        titleForm,
        titleForm2,
        titleWhy,
        descriptionWhy,
        titleBottom,
        descriptionBlue,
        descriptionBlue2,
        descriptionBlue3,
        imgDescription: req.files?.imgDescription?.[0]?.path || '',
        

      });

      return res.status(201).json({
        message: 'Registro creado correctamente',
        data: newRedactionTesis,
      });
    } catch (error) {
      console.error('Error al crear:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};


// Actualizar un registro existente
const updateRedactionTesis = async (req, res) => {
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

      const RedactionTesisRecord = await StatisticalAnalysis.findByPk(id);
      if (!RedactionTesisRecord) {
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      const updatedData = {
        title: req.body.title,
        description: req.body.description,
        titleForm: req.body.titleForm,
        titleForm2: req.body.titleForm2,
        titleWhy: req.body.titleWhy,
        descriptionWhy: req.body.descriptionWhy,
        titleBottom: req.body.titleBottom,
        descriptionBlue: req.body.descriptionBlue,
        descriptionBlue2: req.body.descriptionBlue2,
        descriptionBlue3: req.body.descriptionBlue3,

       
  

      
      };

      if (req.files && req.files.imgDescription && req.files.imgDescription.length > 0) {
        updatedData.imgDescription = req.files.imgDescription[0].path;
      } 

  

      await RedactionTesisRecord.update(updatedData);

      return res.status(200).json({
        message: 'Registro actualizado correctamente',
        data: RedactionTesisRecord,
      });
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};



const allRedactionTesis = async (req, res) => {

    try {
 const allredactiontesis = await StatisticalAnalysis.findAll()

 if (!allredactiontesis) {
  console.log("No hay información guardada en la base de datos")
  res.status(404).send({message: "No hay información guardada en la base de datos"})
  
 } 

 console.log("Hay información guardada en la base de datos")
 res.status(200).send({message: "Hay información guardada en la base de datos", allredactiontesis})
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};
module.exports = { createRedactionTesis, updateRedactionTesis, allRedactionTesis };

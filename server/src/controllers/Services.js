const { Service } = require('../db');
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
const createService = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error en la subida:', err);
      return res.status(400).json({ message: 'Error al subir el archivo', error: err.message });
    }

    try {


      const {
        title,
        subTitle,
        titleDescription,
        titleRedaccionDeTesis,
        descriptionRedaccionDeTesis,
        titleAsesoriaAcademica,
        descriptionAsesoriaAcademica,
        titleCorrecciones,
        descriptionCorrecciones,
        titleMonografia,
        descriptionMonografia,
        titleMemoriaDeTrabajo,
        descriptionMemoriaDeTrabajo,
        titleArticuloCientifico,
        descriptionArticuloCientifico,
        titleAnalisisEstadistico,
        descriptionAnalisisEstadistico,


        
      } = req.body;

      const newService = await Service.create({
        title,
        subTitle,
        titleDescription,
        titleRedaccionDeTesis,
        descriptionRedaccionDeTesis,
        titleAsesoriaAcademica,
        descriptionAsesoriaAcademica,
        titleCorrecciones,
        descriptionCorrecciones,
        titleMonografia,
        descriptionMonografia,
        titleMemoriaDeTrabajo,
        descriptionMemoriaDeTrabajo,
        titleArticuloCientifico,
        descriptionArticuloCientifico,
        titleAnalisisEstadistico,
        descriptionAnalisisEstadistico,
        imgDescription: req.files?.imgDescription?.[0]?.path || '',
        

      });

      return res.status(201).json({
        message: 'Registro creado correctamente',
        data: newService,
      });
    } catch (error) {
      console.error('Error al crear:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};


// Actualizar un registro existente
const updateService = async (req, res) => {
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

      const serviceRecord = await Service.findByPk(id);
      if (!serviceRecord) {
console.log('Registro no encontrado')
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      const updatedData = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        titleDescription: req.body.titleDescription,
        titleRedaccionDeTesis: req.body.titleRedaccionDeTesis,
        descriptionRedaccionDeTesis: req.body.descriptionRedaccionDeTesis,
        titleAsesoriaAcademica: req.body.titleAsesoriaAcademica,
        descriptionAsesoriaAcademica: req.body.descriptionAsesoriaAcademica,
        titleCorrecciones: req.body.titleCorrecciones,
        descriptionCorrecciones: req.body.descriptionCorrecciones,
        titleMonografia: req.body.titleMonografia,
        descriptionMonografia: req.body.descriptionMonografia,
        titleMemoriaDeTrabajo: req.body.titleMemoriaDeTrabajo,
        descriptionMemoriaDeTrabajo: req.body.descriptionMemoriaDeTrabajo,
        titleArticuloCientifico: req.body.titleArticuloCientifico,
        descriptionArticuloCientifico: req.body.descriptionArticuloCientifico,
        titleAnalisisEstadistico: req.body.titleAnalisisEstadistico,
        descriptionAnalisisEstadistico: req.body.descriptionAnalisisEstadistico,
      
      
      };

      if (req.files && req.files.imgDescription && req.files.imgDescription.length > 0) {
        updatedData.imgDescription = req.files.imgDescription[0].path;
      } 

   
      await serviceRecord.update(updatedData);

      return res.status(200).json({
        message: 'Registro actualizado correctamente',
        data: serviceRecord,
      });
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};



const allService = async (req, res) => {

    try {
 const allservice = await Service.findAll()

 if (!allservice) {
  console.log("No hay información guardada en la base de datos")
  res.status(404).send({message: "No hay información guardada en la base de datos"})
  
 } 

 console.log("Hay información guardada en la base de datos")
 res.status(200).send({message: "Hay información guardada en la base de datos", allservice})
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};
module.exports = { createService, updateService, allService };

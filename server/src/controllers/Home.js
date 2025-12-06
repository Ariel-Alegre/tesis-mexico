const { Home } = require('../db');
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
  { name: 'bgImage', maxCount: 1 },
  { name: 'elaborationImage', maxCount: 1 }
]);
// Crear nuevo registro
const createHome = async (req, res) => {
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
        subTitleDescription,
        banner,
        item1,
        item2,
        item3,
        titleWhyTesis,
        descriptionTesis,
        titleAsesoria,
        descriptionAsesoria,
        titleCorreccion,
        descriptionCorreccion,
        titleAccompaniment,
        descriptionAccompaniment,
        titleConfidencialidad,
        descriptionConfidencialidad,
        titleGarantia,
        descriptionGarantia,
        titleFlexibidad,
        descriptionFlexibidad,
      } = req.body;

         let bgImage = '';
      if (req.files && req.files.bgImage && req.files.bgImage[0] && req.files.bgImage[0].path) {
        bgImage = req.files.bgImage[0].path;
      }

      let elaborationImage = '';
      if (req.files && req.files.elaborationImage && req.files.elaborationImage[0] && req.files.elaborationImage[0].path) {
        elaborationImage = req.files.elaborationImage[0].path;
      }
      const newHome = await Home.create({
        title,
        subTitle,
        titleDescription,
        subTitleDescription,
        item1,
        item2,
        item3,
        banner,
        titleWhyTesis,
        descriptionTesis,
        titleAsesoria,
        descriptionAsesoria,
        titleCorreccion,
        descriptionCorreccion,
        titleAccompaniment,
        descriptionAccompaniment,
        titleConfidencialidad,
        descriptionConfidencialidad,
        titleGarantia,
        descriptionGarantia,
        titleFlexibidad,
        descriptionFlexibidad,
       bgImage: bgImage,
        elaborationImage: elaborationImage,
        

      });

      return res.status(201).json({
        message: 'Registro creado correctamente',
        data: newHome,
      });
    } catch (error) {
      console.error('Error al crear:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};


// Actualizar un registro existente
const updateHome = async (req, res) => {
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

      const homeRecord = await Home.findByPk(id);
      if (!homeRecord) {
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      const updatedData = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        titleDescription: req.body.titleDescription,
        subTitleDescription: req.body.subTitleDescription,
        item1: req.body.item1,
        item2: req.body.item2,
        item3: req.body.item3,
        banner: req.body.banner,
        titleWhyTesis: req.body.titleWhyTesis,
        descriptionTesis: req.body.descriptionTesis,
        titleAsesoria: req.body.titleAsesoria,
        descriptionAsesoria : req.body.descriptionAsesoria,
        titleCorreccion : req.body.titleCorreccion,
        descriptionCorreccion : req.body.descriptionCorreccion,
        titleAccompaniment: req.body.titleAccompaniment,
        descriptionAccompaniment: req.body.descriptionAccompaniment,
        titleConfidencialidad: req.body.titleConfidencialidad,
        descriptionConfidencialidad: req.body.descriptionConfidencialidad,
        titleGarantia: req.body.titleGarantia,
        descriptionGarantia: req.body.descriptionGarantia,
        titleFlexibidad: req.body.titleFlexibidad,
        descriptionFlexibidad: req.body.descriptionFlexibidad,
      };

      if (req.files && req.files.bgImage && req.files.bgImage.length > 0) {
        updatedData.bgImage = req.files.bgImage[0].path;
      } 

      if (req.files && req.files.elaborationImage && req.files.elaborationImage.length > 0) {
        updatedData.elaborationImage = req.files.elaborationImage[0].path;
      } 

      await homeRecord.update(updatedData);

      return res.status(200).json({
        message: 'Registro actualizado correctamente',
        data: homeRecord,
      });
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
  });
};



const allHome = async (req, res) => {

    try {
 const allhome = await Home.findAll()

 if (!allhome) {
  console.log("No hay información guardada en la base de datos")
  res.status(404).send({message: "No hay información guardada en la base de datos"})
  
 } 

 console.log("Hay información guardada en la base de datos")
 res.status(200).send({message: "Hay información guardada en la base de datos", allhome})
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};
module.exports = { createHome, updateHome, allHome };

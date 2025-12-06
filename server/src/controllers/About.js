const { About } = require('../db');
require('dotenv').config();





const createAbout = async (req, res) => {
 

    try {


      const {
        title,
        subTitle,
        titleDescription,
        subTitleDescription,
        subTitleDescription2,
        titleProceso,
        titleRequerimientos,
        descriptionRequerimientos,
        titlePresupuesto,
        descriptionPresupuesto,
          titleExperto,
        descriptionExperto,
        titleRespaldo,
        descriptionRespaldo,
        titleGarantia,
        descriptionGarantia,
 
        

        
      } = req.body;


      const newAbout = await About.create({
        title,
        subTitle,
        titleDescription,
        subTitleDescription,
        subTitleDescription2,
        titleProceso,
        titleRequerimientos,
        descriptionRequerimientos,
        titleExperto,
        descriptionExperto,

        titlePresupuesto,
        descriptionPresupuesto,
        titleRespaldo,
        descriptionRespaldo,
        titleGarantia,
  
        descriptionGarantia,
        

      });

      return res.status(201).json({
        message: 'Registro creado correctamente',
        data: newAbout,
      });
    } catch (error) {
      console.error('Error al crear:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};


// Actualizar un registro existente
const updateAbout = async (req, res) => {
 
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: 'ID es requerido para actualizar' });
      }

      const aboutRecord = await About.findByPk(id);
      if (!aboutRecord) {
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      const updatedData = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        titleDescription: req.body.titleDescription,
        subTitleDescription: req.body.subTitleDescription,
        subTitleDescription2: req.body.subTitleDescription2,

        
        titleProceso: req.body.titleProceso,
        titleRequerimientos: req.body.titleRequerimientos,
        descriptionRequerimientos: req.body.descriptionRequerimientos,
        titlePresupuesto: req.body.titlePresupuesto,
        descriptionPresupuesto: req.body.descriptionPresupuesto,
        titleRespaldo: req.body.titleRespaldo,
        descriptionRespaldo: req.body.descriptionRespaldo,
        titleExperto: req.body.titleExperto,
        descriptionExperto: req.body.descriptionExperto,
        titleGarantia: req.body.titleGarantia,
        descriptionGarantia: req.body.descriptionGarantia,

      };

   
      await aboutRecord.update(updatedData);

      return res.status(200).json({
        message: 'Registro actualizado correctamente',
        data: aboutRecord,
      });
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};



const allAbout= async (req, res) => {

    try {
 const allabout = await About.findAll()

 if (!allabout) {
  console.log("No hay información guardada en la base de datos")
  res.status(404).send({message: "No hay información guardada en la base de datos"})
  
 } 

 console.log("Hay información guardada en la base de datos")
 res.status(200).send({message: "Hay información guardada en la base de datos", allabout})
    } catch (error) {
      console.error('Error al actualizar:', error);
      return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};
module.exports = { createAbout, updateAbout, allAbout };

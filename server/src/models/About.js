const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const About = sequelize.define('About', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(3000),
    },
    subTitle: {
        type: DataTypes.STRING(3000),
      },
      titleDescription: {
        type: DataTypes.STRING(3000),
      },
      subTitleDescription: {
        type: DataTypes.STRING(3000),
      },

      subTitleDescription2: {
        type: DataTypes.STRING(3000),
      },
      
      titleProceso: {
        type: DataTypes.STRING(3000),
      },
      titleRequerimientos: {
        type: DataTypes.STRING(3000),
      },
      descriptionRequerimientos: {
        type: DataTypes.STRING(3000),
      },
      titlePresupuesto: {
        type: DataTypes.STRING(3000),
      },
      descriptionPresupuesto: {
        type: DataTypes.STRING(3000),
      },
      titleExperto: {
        type: DataTypes.STRING(3000),
      },
      descriptionExperto: {
        type: DataTypes.STRING(3000),
      },
      titleRespaldo: {
        type: DataTypes.STRING(3000),
      },
      descriptionRespaldo: {
        type: DataTypes.STRING(3000),
      },
      titleGarantia: {
        type: DataTypes.STRING(3000),
      },
      descriptionGarantia: {
        type: DataTypes.STRING(3000),
      },
  
    
  }, {
    timestamps: false, // Agrega createdAt y updatedAt automáticamente
  });



  return About;
};



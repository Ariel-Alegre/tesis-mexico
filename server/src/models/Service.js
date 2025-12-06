const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Service = sequelize.define('Service', {
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

    imgDescription: {
        type: DataTypes.STRING(3000),

},

titleRedaccionDeTesis: {
    type: DataTypes.STRING(3000),

},

descriptionRedaccionDeTesis: {
    type: DataTypes.STRING(3000),

},

titleAsesoriaAcademica: {
    type: DataTypes.STRING(3000),

},

descriptionAsesoriaAcademica: {
    type: DataTypes.STRING(3000),

},
titleCorrecciones: {
    type: DataTypes.STRING(3000),

},

descriptionCorrecciones: {
    type: DataTypes.STRING(3000),

},
titleMonografia: {
    type: DataTypes.STRING(3000),

},

descriptionMonografia: {
    type: DataTypes.STRING(3000),

},
titleMemoriaDeTrabajo: {
    type: DataTypes.STRING(3000),

},

descriptionMemoriaDeTrabajo: {
    type: DataTypes.STRING(3000),

},
titleArticuloCientifico: {
    type: DataTypes.STRING(3000),

},

descriptionArticuloCientifico: {
    type: DataTypes.STRING(3000),

},
titleAnalisisEstadistico: {
    type: DataTypes.STRING(3000),

},

descriptionAnalisisEstadistico: {
    type: DataTypes.STRING(3000),

},



    
  }, {
    timestamps: false, // Agrega createdAt y updatedAt automáticamente
  });



  return Service;
};



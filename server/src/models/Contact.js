const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
 
    title: {
            type: DataTypes.STRING(3000),

    },
 
    descriptionHeader: {
            type: DataTypes.STRING(3000),

    },

    descriptionHeader2: {
        type: DataTypes.STRING(3000),

},

imgHeader: {
    type: DataTypes.STRING(3000),

},
titleTop: {
    type: DataTypes.STRING(3000),

},

titleTop2: {
    type: DataTypes.STRING(3000),

},


titleForm: {
    type: DataTypes.STRING(3000),

},
titleImg: {
    type: DataTypes.STRING(3000),

},

imgForm: {
    type: DataTypes.STRING(3000),

},

titleBottom: {
    type: DataTypes.STRING(3000),

},

titleBottom2: {
    type: DataTypes.STRING(3000),

},







    
  }, {
    timestamps: false, // Agrega createdAt y updatedAt automáticamente
  });



  return Contact;
};



const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
 
 
    descriptionHeader: {
            type: DataTypes.STRING(3000),

    },

    descriptionHeader2: {
        type: DataTypes.STRING(3000),

},
titleBtnPayment: {
    type: DataTypes.STRING(3000),

},
imgHeader: {
    type: DataTypes.STRING(3000),

},

titleImg: {
    type: DataTypes.STRING(3000),

},

imgDescription: {
    type: DataTypes.STRING(3000),

},
titleQuotas: {
    type: DataTypes.STRING(3000),

},


description: {
    type: DataTypes.STRING(3000),

},

description2: {
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



  return PaymentMethod;
};



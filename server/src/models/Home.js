const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Home = sequelize.define('Home', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
   bgImage: {
      type: DataTypes.STRING(3000),
    },
   elaborationImage: {
    type: DataTypes.STRING(3000),

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
    banner: {
            type: DataTypes.STRING(3000),

    },
    item1: {
            type: DataTypes.STRING(3000),

    },
    item2: {
            type: DataTypes.STRING(3000),

    },
    item3: {
            type: DataTypes.STRING(3000),

    },
    titleWhyTesis: {
            type: DataTypes.STRING(3000),

    },
    descriptionTesis: {
            type: DataTypes.STRING(3000),

    },
    titleAsesoria: {
            type: DataTypes.STRING(3000),

    },

    descriptionAsesoria: {
        type: DataTypes.STRING(3000),

},

titleCorreccion: {
        type: DataTypes.STRING(3000),

},
descriptionCorreccion: {
        type: DataTypes.STRING(3000),

},
titleAccompaniment : {
        type: DataTypes.STRING(3000),

},
descriptionAccompaniment: {
        type: DataTypes.STRING(3000),

},
titleConfidencialidad: {
        type: DataTypes.STRING(3000),

},
descriptionConfidencialidad: {
        type: DataTypes.STRING(3000),

},
titleGarantia : {
        type: DataTypes.STRING(3000),

},
descriptionGarantia: {
        type: DataTypes.STRING(3000),

},
titleFlexibidad : {
        type: DataTypes.STRING(3000),

},
descriptionFlexibidad : {
        type: DataTypes.STRING(3000),

},
    
  }, {
    timestamps: false, // Agrega createdAt y updatedAt automáticamente
  });



  return Home;
};



const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const ScientificArticle = sequelize.define('ScientificArticle', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },


        title: {
            type: DataTypes.STRING(3000),

        },

        description: {
            type: DataTypes.STRING(3000),

        },

        titleForm: {
            type: DataTypes.STRING(3000),

        },
        titleForm2: {
            type: DataTypes.STRING(3000),

        },
        titleWhy : {
            type: DataTypes.STRING(3000),

        },
        descriptionWhy: {
            type: DataTypes.STRING(3000),

        },
        titleBottom: {
            type: DataTypes.STRING(3000),

        },
        descriptionBlue: {
            type: DataTypes.STRING(3000),

        },

        descriptionBlue2: {
            type: DataTypes.STRING(3000),

        },

        descriptionBlue3: {
            type: DataTypes.STRING(3000),

        },

        imgDescription: {
            type: DataTypes.STRING(3000),

        },






    }, {
        timestamps: false, // Agrega createdAt y updatedAt automáticamente
    });



    return ScientificArticle;
};



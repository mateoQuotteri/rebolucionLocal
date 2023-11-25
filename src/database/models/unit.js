module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        title: { type: dataTypes.STRING },
        description : { type: dataTypes.STRING },
        video : { type: dataTypes.STRING },
        id_modulo: { type: dataTypes.INTEGER },

    }

    let config = { tableName: "units", timestamps: false }
    const Units = sequelize.define("Units", cols, config)

   Units.associate = function (models) {
        Units.belongsToMany(models.Modules, {
            as: "modules",
            foreignKey: "id_modulo",
            through: "units",
            timestamps: false,
        })
    }
    return Units
}



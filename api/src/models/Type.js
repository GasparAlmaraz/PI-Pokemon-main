const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("type", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        banned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }, { timestamps: false });
}
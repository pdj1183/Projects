const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("auction", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        make: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        model: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        year: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                max: 2025,
                min: 1900,
            },
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        location: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        milage: {
            allowNull: false,
            type: DataTypes.STRING
        },
        coverImage:{
            allowNull: false,
            type: DataTypes.STRING,
        },
        end: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        bid: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
            },
        },
        reserve: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: "live",
        },
    });
};

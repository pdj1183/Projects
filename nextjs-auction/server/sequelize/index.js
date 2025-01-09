const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "auction-db/database.sqlite",
    logQueryParameters: true,
    benchmark: true,
});

const modelDefiners = [
    require("./models/user.model"),
    require("./models/auction.model"),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;

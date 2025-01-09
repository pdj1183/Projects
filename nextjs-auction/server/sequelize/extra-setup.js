function applyExtraSetup(sequelize) {
    const { user, auction } = sequelize.models;

    user.hasMany(auction);
    auction.belongsTo(user);
}

module.exports = { applyExtraSetup };

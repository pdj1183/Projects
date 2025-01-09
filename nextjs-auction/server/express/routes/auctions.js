const { models } = require("../../sequelize");
const { getIdParam } = require("../helpers");

async function getAll(req, res) {
    const auctions = await models.auction.findAll();
    res.status(200).json(auctions);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const auction = await models.auction.findByPk(id);
    if (auction) {
        res.status(200).json(auction);
    } else {
        res.status(404).send("404 - Not found");
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(
            `Bad request: ID should not be provided, since it is determined automatically by the database.`,
        );
    } else {
        await models.auction.create(req.body);
        res.status(201).end();
    }
}

async function update(req, res) {
    const id = getIdParam(req);

    if (req.body.id === id) {
        await models.auction.update(req.body, {
            where: {
                id: id,
            },
        });
        res.status(200).end();
    } else {
        res.status(400).send(
            `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`,
        );
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    await models.auction.destroy({
        where: {
            id: id,
        },
    });
    res.status(200).end();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};

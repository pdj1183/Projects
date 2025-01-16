const sequelize = require("../sequelize");

async function reset() {
    console.log(
        "Will rewrite the SQLite example database, adding some dummy data.",
    );

    await sequelize.sync({ force: true });

    await sequelize.models.user.bulkCreate([
        { username: "bob", email: "bob@gmail.com" },
        { username: "tom", email: "tom@gmail.com" },
        { username: "tim", email: "tim@gmail.com" },
        { username: "john", email: "john@gmail.com" },
        { username: "beth", email: "beth@gmail.com" },
    ]);

    for (const user of await sequelize.models.user.findAll()) {
        await user.createAuction({
            make: "Kia",
            model: "Stinger GT",
            year: "2018",
            description: "Blue Kia for sale for 12k.",
            location: "Fort Collins, CO 80526",
            milage: "65,000 Miles",
            converImage: "Kia-6.jpg",
            end: "2025-01-16 12:00:00",
            reserve: false,
            status: "live",
        });
    }
    console.log("Done!");
}

reset();

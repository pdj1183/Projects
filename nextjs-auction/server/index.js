const app = require("./express/app.js");
const sequelize = require("./sequelize");

const PORT = 8080;

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log("Database connection OK!");
    } catch (error) {
        console.log("Unable to connect to the database:");
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    app.get("/api/home", (req, res) => {
        res.json({ message: "Hello World" });
    });

    app.listen(PORT, () => {
        console.log(
            `Express server started on port ${PORT}. Try some routes, such as '/api/users'.`,
        );
    });
}

init();

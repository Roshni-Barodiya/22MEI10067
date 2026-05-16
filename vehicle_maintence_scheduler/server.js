const express = require("express");
const logger = require("../logging_middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

const schedules = [];

app.get("/", (req, res) => {
    res.send("Vehicle Maintenance Scheduler API");
});

app.post("/schedule", (req, res) => {
    const data = req.body;

    schedules.push(data);

    res.json({
        message: "Schedule Added",
        data
    });
});

app.get("/schedules", (req, res) => {
    res.json(schedules);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const logger = require("../logging_middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

const notifications = [];

app.post("/notify", (req, res) => {
    const notification = req.body;

    notifications.push(notification);

    res.json({
        message: "Notification Sent",
        notification
    });
});

app.get("/notifications", (req, res) => {
    res.json(notifications);
});

app.listen(4000, () => {
    console.log("Notification server running on port 4000");
});
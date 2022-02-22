const express = require("express");
const app = express();
const status = require("./api/status");
const data = require("./api/data");

app.use(express.json({ extended: false}));
app.use("/api/status", status);
app.use("/api/data", data);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

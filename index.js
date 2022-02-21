const express = require("express");
const app = express();
const test = require("./api/test");

app.use(express.json({ extended: false}));
app.use("/api/test", test);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

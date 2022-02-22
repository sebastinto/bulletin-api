const express = require("express");
const router = express.Router();

/**
 * GET test data.
 * 
 * @return test data | empty.
 */
router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "success",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("server error");
    }
});

module.exports = router;
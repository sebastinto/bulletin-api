const express = require("express");
const router = express.Router();

let data = [
    {
      "id": 1,
      "name": "one",
      "role": "first"
    },
    {
      "id": 2,
      "name": "two",
      "role": "second"
    },
    {
      "id": 3,
      "name": "three",
      "role": "third"
    }
  ];

/**
 * GET test data.
 * 
 * @return test data | empty.
 */
router.get("/", async (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send("server error");
    }
});

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const item = data.find((item) => item.id === id);

    if(!item) {
        res.status(500).send("not found");
    } else {
        res.json(item)
    }
})


module.exports = router;
  
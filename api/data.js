const express = require("express");
const router = express.Router();

let data = [
    {
       "time":1652229320349,
       "label":"1.0.0-RC2",
       "changes":[
          {
             "changeType":"NEW",
             "summary":"Bulletin is easy!"
          },
          {
             "changeType":"DEFAULT",
             "summary":"Kotlin DSL FTW!"
          }
       ]
    },
    {
       "time":0,
       "label":"0.0.0",
       "changes":[
          {
             "changeType":"DEFAULT",
             "summary":"Example DEFAULT."
          },
          {
             "changeType":"IMPROVED,",
             "summary":"Example IMPROVED."
          },
          {
             "changeType":"FIXED",
             "summary":"Example FIXED."
          },
          {
             "changeType":"NEW",
             "summary":"Example NEW."
          },
          {
             "changeType":"REMOVED",
             "summary":"Example REMOVED."
          },
          {
             "changeType":"DEPRECATED",
             "summary":"Example DEPRECATED."
          },
          {
             "changeType":"SECURITY",
             "summary":"Example SECURITY."
          }
       ]
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
  
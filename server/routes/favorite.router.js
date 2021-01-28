const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "favorites"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("Error completing SELECT favorite query", error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO "favorites" ("url", "title") VALUES ($1, $2)`;

  const queryValues = [newFavorite.url, newFavorite.title];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error("Error completing INSERT favorite query", error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const catFavorite = req.body;

  const queryText = `UPDATE "favorites" SET "cat_id" = $1 WHERE id = $2`;

  const queryValues = [catFavorite.cat_id, req.params.favId];

  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error completing UPDATE favorites query", error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  const queryText = `DELETE FROM "favorites" WHERE id = $1`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error completing DELETE favorites query", error);
      res.sendStatus(500);
    });
});

module.exports = router;

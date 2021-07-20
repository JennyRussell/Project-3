const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/", (req, res) => {
  const image = req.body.image;

  db.query(
    "INSERT INTO Uploads (image, author) VALUES (?, ?, ?, ?);",
    [image],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM Uploads", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

router.get("/byUser/:username", (req, res) => {
  const userName = req.params.username;
  db.query(
    "SELECT * FROM Uploads WHERE author = ?;",
    userName,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

module.exports = router;

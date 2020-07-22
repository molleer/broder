const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME
});

const app = express();
app.use(bodyParser.json());

app.get("/api/", (req, res) => {
  res.send("Hello there!");
});

app.post("/api/refueling", async (req, res) => {
  const result = await pool
    .query(
      'INSERT INTO refueling ("user", cost_sek, amount_liters) VALUES ($1, $2, $3)',
      [req.body.user, req.body.cost_sek, req.body.amount_liters]
    )
    .catch(err => {
      res.status(400).json(err);
    });

  if (!result) {
    return;
  }

  res.status(201).json({ success: true });
});

app.post("/api/driving", async (req, res) => {
  const result = await pool
    .query('INSERT INTO driving ("user", distance_nm) VALUES ($1, $2)', [
      req.body.user,
      req.body.distance_nm
    ])
    .catch(err => {
      res.status(400).json(err);
    });

  if (!result) {
    return;
  }

  res.status(201).json({ success: true });
});

app.listen(8080, () => {
  console.log("Starting server at port 8080");
});

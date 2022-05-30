import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Goodmorning");
});

app.listen(3000);

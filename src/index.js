import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Bye world");
});

app.listen(3000);

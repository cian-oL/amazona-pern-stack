import express from "express";
import data from "./data";

const PORT = 5432;
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

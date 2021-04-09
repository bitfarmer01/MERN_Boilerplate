const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
connectDB();

app.use('helmet')
app.get("/", cors(), (req, res) => {
  res.json(customers);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));

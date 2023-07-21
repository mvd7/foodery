const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://dimov:12345@cluster0.svzj2b1.mongodb.net/foods-database";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connected!");
});

db.on("error", () => {
  console.log("MongoDB Connection Failed!");
});

module.exports = mongoose;

const express = require("express");
const Food = require("./models/foodsModel");
const db = require("./db");
const foodRoute = require("./routes/foodRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

const app = express();
app.use(express.json());

app.use("/api/food/", foodRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const Food = require("../models/foodsModel");

const router = express.Router();

router.get("/getallfood", async (req, res) => {
  try {
    const food = await Food.find({});
    res.send(food);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/addfood", async (req, res) => {
  const food = req.body.food;

  try {
    const newfood = new Food({
      name: food.name,
      image: food.image,
      varients: ["small", "medium", "large"],
      description: food.description,
      category: food.category,
      prices: [food.prices],
    });
    await newfood.save();
    res.send("New Food Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getfoodbyid", async (req, res) => {
  const foodId = req.body.foodId;

  try {
    const food = await Food.findOne({ _id: foodId });
    res.send(food);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/editfood", async (req, res) => {
  const editedfood = req.body.editedfood;

  try {
    const food = await Food.findOne({ _id: editedfood._id });

    (food.name = editedfood.name),
      (food.description = editedfood.description),
      (food.image = editedfood.image),
      (food.category = editedfood.category),
      (food.prices = [editedfood.prices]);

    await food.save();

    res.send("Food Details Edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletefood", async (req, res) => {
  const foodId = req.body.foodId;

  try {
    await Food.findOneAndDelete({ _id: foodId });
    res.send("Food Deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const foodsSchema = mongoose.Schema(
  {
    name: { type: String, require },
    variant: [],
    prices: { type: Object, require },
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const foodModel = mongoose.model("foods", foodsSchema);

module.exports = foodModel;

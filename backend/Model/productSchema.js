const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
    maxLength: [8, "price cann't exceed 8 characters"],
  },
  rating: {
    type: Number,
    // required: [true,"please enter product rating"],
    default: 0,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  Stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [4, "stock cann't exceed 4 characters"],
  },
  numOfReviews: { type: Number, default: 0 },
  reviews: [
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const { model, Schema } = mongoose;

// schema
const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "field nama harus ada"],
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "field description harus di isi"],
      minlength: 3,
      maxlength: 255,
    },
    price: {
      type: Number,
      required: true,
      min: 1000,
      max: 1000000,
    },
    stock: Number,
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);

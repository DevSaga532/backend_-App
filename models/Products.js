// models\Products.js
const mongose = require("mongoose");
const productsSchema = new mongose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    producto_location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongose.model("Products", productsSchema);

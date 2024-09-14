const mongose = require("mongoose");
const productsSchema = new mongose.Schema(
  {
    title: { type: String, required: true },
    supplier: { type: String, required: true },
    price: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    producto_location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongose.model("Products", productsSchema);


// controllers\productosControllers.js
const Product = require("../models/Products");

module.exports = {
    // crear un nuevo producto
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Product created successfully");
    } catch (error) {
      res.status(500).json("failed to create the product");
    }
  },
//     buscar todos
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },
//     buscar por id
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("failed to get the product");
    }
  },
//   buscar por palabra clave producto
  searchProduct : async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
              $search: {
                index: "furniture",
                text: {
                  query: req.params.key,
                  path: {
                    wildcard: "*"
                  }
                }
              }
            }
          ]
        )
        res.status(200).json(result)
     
    } catch (error) {
        res.status(500).json("failed to get the products")
    }
  }
};

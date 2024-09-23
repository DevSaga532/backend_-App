
// routes\products.js
const router = require("express").Router();
const productosControllers = require("../controllers/productosControllers");


router.get("/", productosControllers.getAllProduct);
router.get("/:id", productosControllers.getProduct);
router.get("/search/:key", productosControllers.searchProduct);
router.post("/", productosControllers.createProduct);

module.exports = router
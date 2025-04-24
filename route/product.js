const express = require('express')
const { createProductController, getAllProductController, getProductByIDController, updateProductController, deleteproductController } = require("../controller/productController");

let router = express.Router();
router.post("/create", createProductController)
router.get("/products", getAllProductController)
router.get("/product/:id", getProductByIDController)
router.put("/product/:id", updateProductController)
router.delete("/product/:id", deleteproductController)
module.exports = router;
const { Products } = require("../models/product")

const createProductController = async (req, res) => {
    const { productName, categoryName, price, description } = req.body;
    try {
        const product = new Products({
            productName: productName,
            categoryName: categoryName,
            price: price,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        await Products.create(product);
        res.status(201).json({
            message: "Tao thanh cong",
            product
        })
    } catch (error) {
        console.log("Error from server!", error);
        res.status(500).json({ message: "error fro server!" });
    }
}

const getAllProductController = async (req, res) => {
    try {
        const products = await Products.find();

        console.log("list products", products);
        res.status(200).json({
            message: "lay thanh cong !",
            products
        })
    } catch (error) {
        res.status(500).json({ message: "Error from server!" })
    }
}

const getProductByIDController = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Products.findOne({_id: id });
        
        res.status(200).json({
            message: " Da thanh cong",
            product
        })
    } catch (error) {
        res.status(500).json({ message: "Error from server!" })
    }
}

const updateProductController = (req, res) => {
    const id = req.params.id;
    const { productName, categoryName, price, description } = req.body;
    console.log(req.body);
    try {
        const product = {
            productName: productName,
            categoryName: categoryName,
            price: price,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        Products.findByIdAndUpdate(id, product);
        res.status(201).json({
            message: "Update thanh cong",
            product

        })

    } catch (error) {
        console.log("Error from server!")
        res.status(500).json({ message: "Error from server!" });
    }
}

const deleteproductController = async (req, res) => {
    const id = req.params.id;
    try {
        await Products.findByIdAndDelete(id);
        res.status(200).json({ message: "delete success" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });

    }
}

module.exports = {
    createProductController,
    getAllProductController,
    getProductByIDController,
    updateProductController,
    deleteproductController
}
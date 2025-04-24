const express = require('express')
const { createUserController, getAllUserController, getUserByIDController, updateUserController, deleteUserController } = require("../controller/userController");

let router = express.Router();
router.post("/create", createUserController)
router.get("/users", getAllUserController)
router.get("/user/:id", getUserByIDController)
router.put("/user/:id", updateUserController)
router.delete("/user/:id", deleteUserController)

module.exports = router;
const express = require('express')
const { createUserController, getAllUserController, getUserByIDController, updateUserController, deleteUserController, login } = require("../controller/userController");
const {authenticateToken} = require('../middleware/auth')

let router = express.Router();
router.post("/create", authenticateToken,createUserController)
router.get("/users", getAllUserController)
router.get("/user/:id", getUserByIDController)
router.put("/user/:id", updateUserController)
router.delete("/user/:id", deleteUserController)
router.post("/user/login", login);

module.exports = router;
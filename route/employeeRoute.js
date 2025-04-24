const express = require("express");

const { getAllEmployee } = require('../controller/employeeController')

const router = express.Router();

router.get("/employee", getAllEmployee);

module.exports = router
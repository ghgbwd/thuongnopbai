const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");

const userRoute = require("./route/userRoute");
const productRoute = require("./route/productRoute")

require('dotenv').config();
app.use(express.json());
app.get(bodyParser.json({
    limit: "50mb"
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        // using mongoose
        await connection();

        // Lắng nghe cổng
        app.listen(PORT, () => {
            console.log(`Server đang chạy tại http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Error connect to database", error);
    }
})
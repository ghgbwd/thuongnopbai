const { Users } = require("../models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUserController = async (req, res) => {
    const { name, age, email, password, description } = req.body;
    const hashPassword = await bcrypt.hash(password,10)
    try {
        const user = new Users({
            name: name,
            age: age,
            email: email,
            password: hashPassword,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        await Users.create(user);
        res.status(201).json({
            message: "Tao thanh cong",
            user
        })
    } catch (error) {
        console.log("Error from server!", error);
        res.status(500).json({ message: "error from server!" });
    }
}

const getAllUserController = async (req, res) => {
    try {
        const users = await Users.find();
        //find là tìm theo toàn bộ trong điều kiện nếu có , trường hợp () là không có điều kiện

        console.log("list users", users);
        res.status(200).json({
            message: "lay thanh cong!",
            users
        })
    } catch (error) {
        console.log("Error from server", error);
        res.status(500).json({ message: "Error from server!" })
    }
}
const getUserByIDController = async (req, res) => { //req: request : hiểu tạm là nhận vào hoặc cần xử lí, res: response: phía trả ra
    const _id = req.params.id;
    //param là tham số (cụ thể là tham số trên đường dẫn trình duyệt) vd : localhost:3000/users/012912893812 -> param chính là phần 012912893812
    try {
        const user = await Users.findById({ _id }); //điều kiện đặt trong dấu ngoặc nhọn
        //findbyidbyid là tìm theo người dùng có id giống trong điều kiện nếu có , 
        res.status(200).json({
            message: "da thanh cong!",
            user
        })
    } catch (error) {
        console.log("Error from server", error);
        res.status(500).json({ message: "Error from server!" })
    }
}

const updateUserController = (req, res) => {    //async dùng trong bất đồng bộ    const id = req.params.id; // gán biến id bằng req.params.id

    const { name, age, email, password, description } = req.body;  //nhập dữ liệu vào req.body
    console.log(req.body); //hiển thị dữ liệu được khai báo trong terminal

    // const name = req.body.name;
    try {     // try catch sử dụng để phân luồng dữ liệu, dữ liệu đi qua try ko lỗi sẽ hiển thị dữ liệu ngược lại sẽ bắt đc lỗi, tạo ra ngoại lệ giúp chương trình ko bị dừng
        const user = {
            name: name,
            email: email,
            age: age,
            password: password,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        Users.findByIdAndUpdate(id, user);
        res.status(201).json({
            message: "Update thanh cong",
            user
        })

    } catch (error) {
        console.log("Error from server !",);
        res.status(500).json({ message: "Error from server!" });
    }
}

const deleteUserController = async (req, res) => {
    const id = req.params.id;

    try {
        await Users.findByIdAndDelete(id);
        res.status(200).json({ message: "delete success" })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const JWT_SECRET = 'your_jwt_secret_key';

// API login
const login = async (req, res) => {
  const { name, password } = req.body;

  const user = await Users.findOne({name});
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Tạo JWT token
  const token = jwt.sign(
    { id: user.id, name: user.name },
    JWT_SECRET,
    { expiresIn: '1h' } // Token hết hạn sau 1 tiếng
  );

  res.json({ token });
};


module.exports = {
    createUserController,
    getAllUserController,
    getUserByIDController,
    updateUserController,
    deleteUserController,
    login
}
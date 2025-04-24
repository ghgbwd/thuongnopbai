const {data} = require ("../data")

const getAllEmployee = async(req,res) => {
   res.status(200).json(data)
}

module.exports ={
    getAllEmployee
}
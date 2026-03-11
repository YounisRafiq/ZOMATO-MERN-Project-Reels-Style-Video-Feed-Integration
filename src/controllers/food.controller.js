const foodModel = require("../models/food.model.js");
const storageService = require("../services/storage.services.js");
const { v4: uuid } = require("uuid");


async function createFood(req, res) {
  console.log("FoodPartner :" , req.foodPartner);
  res.send("Food Item Created");
  console.log("body :" ,  req.body);

  const uploadImagetoCloudinary = await storageService.uploadOnCloundinary(req.file.path , uuid());

  console.log(uploadImagetoCloudinary , "Upload Compeleted");

  console.log("File :" , req.file);
}

module.exports = {
  createFood,
};

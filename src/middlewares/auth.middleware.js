const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodPartner.model.js');

async function authFoodPartnerMiddleware(req ,res , next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Please Login First"
        })
    };

    try {
       const isValidToken = jwt.verify(token , process.env.JWT_SECRET);

      const foodPartner = await foodPartnerModel.findById(isValidToken._id);

      req.foodPartner = foodPartner;

       next();

    } catch (error) {
        return res.status(401).json({
            message : "Invalid Token",
        })
    }
};

module.exports = {
    authFoodPartnerMiddleware
}
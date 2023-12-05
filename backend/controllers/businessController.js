import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Business from "../models/businessModel.js";

// @desc Register a new user
// @route POST /api/users
// @access public
const registerBusiness = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await Business.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await Business.create({ name, email, password });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("התחרשה תקלה במערכת, העסק לא נוצר!");
    }
  });

  export {
    registerBusiness
  }
import User from "../model/userSchema.js";
import { validate } from "email-validator";

export const signUp = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fields",
    });
  }

  if (!validate(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match",
    });
  }

  try {
    // Create a new user instance
    const userInfo = User(req.body);
    // Save the user to the database
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Every filed is mandatory",
    });
  }

  try {
    // Find the user by email and select the password field
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists and password is correct
    if (!user || user.password !== password) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = user.jwt();
    user.password = undefined;

    // Set cookie options
    const cookieOptions = {
      expires: process.env.JWT_EXPIRE * 60 * 60 * 1000,
      httpOnly: true,
    };
    // Send response with token and user data
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      success: true,
     data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

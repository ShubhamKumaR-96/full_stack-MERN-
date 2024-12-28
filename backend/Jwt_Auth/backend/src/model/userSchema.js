import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      minLength: [5, "Name must be at least 5 characters long"],
      maxLength: [20, "Name must be at most 20 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    forgetPasswordToken: {
      type: String,
    },
    forgetPasswordExpireDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods = {
  jwt() {
    return jwt.sign({ id: this._id, email: this.email }, process.env.SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  },
};

const User = mongoose.model("User", userSchema);

export default User;

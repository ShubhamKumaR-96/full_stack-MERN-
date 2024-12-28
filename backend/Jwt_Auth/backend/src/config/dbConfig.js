import mongoose from "mongoose";

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/JWTAuth";

const databaseConnect = async () => {
  try {
   const conn= await mongoose.connect(MONGODB_URL);
   console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default databaseConnect;

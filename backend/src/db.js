import mongoose from "mongoose";

//localhost = 27.0.0.1:27017

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mernAuth");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

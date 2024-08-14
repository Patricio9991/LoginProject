import mongoose from "mongoose";

//localhost = 27.0.0.1:27017

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ppuchetadev:0WCxf2u7foTEDOWJ@mern-landr.htkyrnn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-LandR");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

//localhost = 127.0.0.1:27017

const localURL = "mongodb://127.0.0.1:27017/mernAuth"
const atlasURL = "mongodb+srv://ppuchetadev:0WCxf2u7foTEDOWJ@mern-landr.htkyrnn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-LandR"

export const connectDB = async () => {
  try {
    await mongoose.connect(atlasURL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

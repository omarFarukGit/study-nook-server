import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database conncet successfully");
  } catch (error) {
    console.log(`database don't conncet successfully`);
  }
};

export default connectDB;

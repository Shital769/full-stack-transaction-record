import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_CLIENT);

    connection
      ? console.log("Mongo connected")
      : console.log("Mongo couldn't connected");
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connectionString = "mongodb://localhost:27017/nov_transaction";
    const connection = mongoose.connect(connectionString);

connection? console.log("Mongo connected") : console.log("Mongo couldn't connected");;

  } catch (error) {
    console.log(error);
  }
};

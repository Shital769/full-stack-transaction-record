import express from "express";
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(morgan("dev")); // logs all the incoming req information

//app.use(helmet()); //setting default security headers to protect some attacks
//app.use(cors());  // allow cross orrigin resources

app.use(express.json()); //convert income data in the req.body

//MongoDB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

app.use("*", (req, res) => {
  res.json({
    message: "Your are in the wrong place, please go back",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});

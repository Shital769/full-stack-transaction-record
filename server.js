import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the incoming req information

//app.use(helmet()); //setting default security headers to protect some attacks
app.use(cors()); // allow cross orrigin resources

app.use(express.json()); //convert income data in the req.body

//MongoDB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//routers
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transactions", transactionRouter);

app.use("*", (req, res) => {
  res.json({
    status: "error",
    message: "Your are in the wrong place, please go back",
  });
});

//catch when router is not found
app.use("*", (req, res, next) => {
  const error = {
    message: "404 page not found",
    code: 200,
  };
  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  console.log(error);
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});

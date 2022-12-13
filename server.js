import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the incoming req information

//app.use(helmet()); //setting default security headers to protect some attacks
app.use(cors()); // allow cross orrigin resources

app.use(express.json()); //convert income data in the req.body

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

//MongoDB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//routers
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { isAuthorized } from "./src/middleware/authorizationMiddleware.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transactions", isAuthorized, transactionRouter);

//catch when router is not found
app.use("/dashboard", (req, res, next) => {
  res.sendFile("/");
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

//global error handler
app.use((error, req, res, next) => {
  //  console.log(error);
  // const code = error.code || 500;
  res.json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});

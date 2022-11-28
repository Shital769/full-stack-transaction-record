import express from "express";
import { insertUser } from "../models/user/userModel.js";
const router = express.Router();

//create user router
router.post("/", async (req, res, next) => {
  try {
    //get the incoming data
    //call insertUser to insert users into the database

    const user = await insertUser(req.body);
    console.log(user);

    if (user?._id) {
      return res.json({
        status: "success",
        message: "User created succefully. you may login now",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create user. Please try again",
    });
  } catch (error) {
    console.log(error.message);

    if (error.message.includes("E11000 duplicate key error collection")) {
        error.code = 200;
      error.message =
        "There is aleray another user exist with the same email, Pelase rest passowrd to use or use different email to register";
    }

    next(error);
  }
});

export default router;

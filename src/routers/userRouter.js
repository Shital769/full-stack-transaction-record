import express from "express";
import { findUser, insertUser } from "../models/user/userModel.js";
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
        message: "User created successfully. you may login now",
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
        "There is already another user exist with the same email, Please reset passowrd to use or use different email to register";
    }

    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    //grab the data coming from the login form
    const user = await findUser(req.body);
    console.log(user);

    user?._id
      ? res.json({
          status: "success",
          message: "Login successful!",
          user: {
            name: user.name,
            _id: user._id,
          },
        })
      : res.json({
          status: "error",
          message: "Error! invalid login details",
        });

    //query database with emailand pin and see if there is any account exist

    // if true, login success
    //  if false, invalid login
  } catch (error) {
    next(error);
  }
});

export default router;

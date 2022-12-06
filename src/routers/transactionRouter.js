import express from "express";

import {
  getAllUserTransactions,
  insertTransactions,
} from "../models/transactions/TransactionModel.js";

const router = express();

//read
router.get("/",  async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const transactions = await getAllUserTransactions({
      userId: authorization,
    });
    res.json({
      status: "success",
      message: "get method to do",
      transactions,
    });
  } catch (error) {
    next(error);
  }
});

//create
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await insertTransactions({
      ...req.body,
      userId: authorization,
    });
    result?._id
      ? res.json({
          status: "success",
          message: "transaction addded successfully",
        })
      : res.json({
          status: "error",
          message: "unable to add, please try again later.",
        });
  } catch (error) {
    next(error);
  }
});

//delete
router.delete("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "delete method to do",
    });
  } catch (error) {
    next(error);
  }
});

export default router;

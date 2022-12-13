import express from "express";

import {
  getAllUserTransactions,
  insertTransactions,
  deleteManyTransactions,
} from "../models/transactions/TransactionModel.js";

const router = express();

//read
router.get("/", async (req, res, next) => {
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
router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { authorization } = req.headers;

    const result = await deleteManyTransactions(req.body, authorization);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: result.deletedCount + "item(s) deleted",
        })
      : res.json({
          status: "error",
          message: "Nothing happened",
        });
  } catch (error) {
    next(error);
  }
});

export default router;

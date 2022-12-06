import transactionSchema from "./transactionSchema.js";

//CRUD

//insert
export const insertTransactions = (insertObj) => {
  return transactionSchema(insertObj).save();
};

//read all transactions, @filter must be an object{}

export const getAllUserTransactions = (filterObj) => {
  return transactionSchema.find(filterObj);
};

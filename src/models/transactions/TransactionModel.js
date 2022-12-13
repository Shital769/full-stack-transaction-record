import TransactionSchema from "./TransactionSchema.js";

//CRUD

//insert
export const insertTransactions = (insertObj) => {
  return TransactionSchema(insertObj).save();
};

//read all transactions, @filter must be an object{}

export const getAllUserTransactions = (filterObj) => {
  return TransactionSchema.find(filterObj);
};

//delete
export const deleteManyTransactions = (ids, userId) => {
  return TransactionSchema.deleteMany({
    _id: {
      $in: ids,
    },
    userId,
  });
};

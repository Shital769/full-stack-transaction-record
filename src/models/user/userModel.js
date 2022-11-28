import UserSchema from "./userSchema.js";

//create user

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

//login user

//delete user
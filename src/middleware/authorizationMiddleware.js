import { findUser } from "../models/user/userModel.js";

export const isAuthorized = async (req, res, next) => {
  // valid user? true: false
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    //if this authorization id is valid then go to nxt middleware
    const user = authorization ? await findUser({ _id: authorization }) : null;
    console.log(user);
    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get current user
import UserModel from "../models/user.model";
const getLoggedUser = async () => {
  try {
    const _id = parseInt(req.decoded._id);
    const user = await UserModel.findById({ _id }).populate("roles");
    if (user) {
      return user;
    }
  } catch (err) {
    console.log(err);
  }
};

import { userModel } from "../database/mongodb.model/user.model.js";

export const find_All_User = (req, res, next) => {
  userModel
    .find().populate("product_id").then((Response) => {
      res.send({
        message: "users found",
        users: Object.values(Response),
      });
    })
    .catch((err) => {
      res.send(JSON.stringify(err));
    });
};

export const findUserBy_ID = (req, res, next) => {
  userModel
    .findOne({ _id: req.query._id })
    .then((Response) => {
      res.send({
        message: "users found",
        user:Response
      });
    })
    .catch((err) => {
        console.log(err)
      res.send({error:err});
    });
};

import { User } from "../../models/index.js";
import { validateRegister } from "../../validations/user.validation.js";

export default async (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  res.status(200).send("It worked!");
};

import UsersModel from "../Models/UsersModel.js";
import PlanModel from "../Models/PlansModel.js";

export const createUser = async (req, res) => {
  const newUser = new UsersModel(req.body);
  const { mobile } = req.body;

  try {
    const oldUser = await UsersModel.findOne({ mobile });
    console.log(mobile);
    if (oldUser) {
      return res
        .status(400)
        .json({ message: "User with this mobile number already exist" });
    }
    const user = await newUser.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const assignPlanToUser = async (req, res) => {
  try {
    const { mobile, plan } = req.body;

    const newPlan = await PlanModel.findOne({ plan });
    const userMobile = await UsersModel.findOne({ mobile });

    userMobile.plans= newPlan;

    console.log(userMobile);
    await userMobile.save();
    res.status(200).json(userMobile);
  } catch (error) {
    res.status(500).json(error);
  }
};

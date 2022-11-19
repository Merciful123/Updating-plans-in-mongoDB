import PlanModel from "../Models/PlansModel.js";
import UsersModel from "../Models/UsersModel.js";

// Assigning plan to user

export const assignPlanToUser = async (req, res) => {
  try {
    const { mobile, plan } = req.body;

    const newPlan = await PlanModel.findOne({ plan });

    const userMobile = await UsersModel.findOne({ mobile });

    userMobile.plans = newPlan;

    console.log(userMobile);
    await userMobile.save();
    res.status(200).json(userMobile);
  } catch (error) {
    res.status(500).json(error);
  }
};

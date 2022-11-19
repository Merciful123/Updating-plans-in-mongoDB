import mongoose from "mongoose";

const plansSchema = mongoose.Schema(
  {
    plan: {
      type: String,
      required: true,
    },
    validity: {
      type: Number,
      required: true,
    },
    data: {
      type: Number,
      required: true,
    },
  },

  { timpestamps: true }
);

const PlanModel = mongoose.model("plans", plansSchema);

export default PlanModel;

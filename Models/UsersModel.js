import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    plans: {
      type: Object,
      plan: String,
      validity: Number,
      data: Number,
      default: "",
    },
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("users", usersSchema);

export default UsersModel;

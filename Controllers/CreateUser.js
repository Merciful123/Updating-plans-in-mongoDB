import UsersModel from "../Models/UsersModel.js";



// Creating User

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



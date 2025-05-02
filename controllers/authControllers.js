import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import validator from "validator";

const authCtlrs = {}

authCtlrs.signUp = async (req, res) => {  
    const { email, password } = req.body;
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Invalid email or weak password" });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword });
      console.log({user})
      res.status(201).json({ message: "Registered Successfully" });
    } catch (err) {
      res.status(400).json({ message: "User already exists" });
    }
}

authCtlrs.login =  async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
}

authCtlrs.user = async (req, res) => {
    const user = await User.findOne({ _id:req.user.id }).select("_id email");
    if (!user) return res.status(400).json({ message: "User not found" });
  
    res.json({ user });
  }

export default authCtlrs
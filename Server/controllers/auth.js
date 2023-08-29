import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      highestDegree,
      university,
      fieldOrMajor,
      occupation,
      industry,
      experienceLevel,
      friends,
      location,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      highestDegree,
      university,
      fieldOrMajor,
      occupation,
      industry,
      experienceLevel,
      friends,
      location,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }); // find user by email
    if (!user) return res.status(400).json("User does not exist"); // if user not found

    const isMatch = await bcrypt.compare(password, user.password); // compare password
    if (!isMatch) return res.status(400).json("Invalid credentials"); // if password does not match

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // create token
    delete user.password; // delete password from user object
    res.status(200).json({ token, user }); // send user and token
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

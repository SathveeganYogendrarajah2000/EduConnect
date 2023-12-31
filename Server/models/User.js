import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 3, max: 20 },
    lastName: { type: String, required: true, min: 3, max: 20 },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 5 },
    picturePath: { type: String, default: "" },
    highestDegree: { type: String, default: "" },
    university: { type: String, default: "" },
    fieldOrMajor: { type: String, default: "" },
    occupation: { type: String, default: "" },
    industry: { type: String, default: "" },
    experienceLevel: Number,
    friends: { type: Array, default: [] },
    location: { type: String, default: "" },
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    authType: { type: String, enum: ["google", "password"], required: true },
    googleId: { type: String, required: false },
    password: { type: String, required: false },
    profile: { type: Object, default: {} },
    tokens: { type: Object, default: {} },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

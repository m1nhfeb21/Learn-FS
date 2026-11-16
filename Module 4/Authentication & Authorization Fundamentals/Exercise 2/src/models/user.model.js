const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  refreshToken: {
    type: String,
    default: null,
  },

  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 12);
});
const User = mongoose.model("User", userSchema);

module.exports = User;

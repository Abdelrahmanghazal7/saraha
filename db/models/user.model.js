const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = model("User", userSchema);

module.exports = userModel;

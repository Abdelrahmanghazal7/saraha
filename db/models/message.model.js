const { Schema, model, Types } = require("mongoose");

const messageSchema = new Schema({
  content: String,
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const messageModel = model("Message", messageSchema);

module.exports = messageModel;

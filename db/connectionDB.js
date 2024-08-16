const { default: mongoose } = require("mongoose");

module.exports.connectionDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/saraha")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("db connected fail", err);
    });
};

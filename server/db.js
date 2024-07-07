const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("DB connected succesfully"))
  .catch((err) => console.error(err));

const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

const USER = mongoose.model("USER", userSchema);

module.exports = { USER };

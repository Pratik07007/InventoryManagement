const express = require("express");
const { USER } = require("../db");

const app = express();

app.use(express.json());

app.get("/api/auth/register", (req, res) => {
  const { name, email, password, phone } = req.body;
  USER.findOne({ email }).then((resp) => {
    if (resp) {
      return res.status(400).json({ message: "Email already exists" });
    }
    USER.create({
      name,
      email,
      password,
      phone,
    }).then(() => res.json({ msg: "user created succesfully" }));
  });
});

app.listen(3000);

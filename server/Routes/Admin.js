const express = require("express");
const { USER } = require("../db");
const cors = require("cors");
const jwt = require("jsonwebtoken")


const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.post("/api/auth/register", (req, res) => {
  const { name, email, password, phone, gender } = req.body;
  USER.findOne({ email }).then((resp) => {
    if (resp) {
      return res
        .status(400)
        .json({ success: false, msg: "Email already exists" });
    }
    USER.create({
      name,
      email,
      password,
      phone,
      gender,
    }).then(() =>
      res.json({ success: true, msg: "Employee created succesfully" })
    );
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  USER.findOne({ email }).then((resp) => {
    if (!resp) {
      return res.json({ success: false, msg: "Employee doesn't exits" });
    } else {
      if (resp.password != password) {
        return res.json({
          success: false,
          msg: "Password is incorrect ",
        });
      }
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res.json({ success: true, token: token});
    }
  });
});

app.listen(3000);

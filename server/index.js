const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/user.model")

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://sharmakshitij250:admin@cluster0.nfzuvjm.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
});

app.get("/api/getAll",async(req,res)=>{
  try {
    const user = await User.find()
    res.json(user)
  } catch (error) {
    res.json({ status: "error", error });
  }
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

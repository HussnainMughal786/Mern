// es6
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dbConnection from "./database/db.js";
import User from "./database/User.js";
import cors from "cors";
const app = express();
dotenv.config();
dbConnection(); //data base
app.use(cors());

app.use(express.json());

// api for posting data in signup form
app.post("/register", async (req, res) => {
  let data = await new User(req.body);
  let result = await data.save();
  res.send(result);
});

//Api for getting user data
app.get("/get-user", async (req, res) => {
  let result = await User.find();
  res.send(result);
});

//Api to delete a user data
app.delete("/delete-user/:id", async (req, res) => {
  let id = req.params.id;
  let check = await User.findById(id);
  if (check) {
    await User.findByIdAndDelete(id);
    return res.send({ messsag: "User deleted" });
  } else {
    return res.send({ messsag: "User not found" });
  }
});

// getting single user data on the basis of id from mongo db
app.get("/Single-user/:id", async (req, res) => {
  let result = await User.findOne({ _id: req.params.id });

  res.json(result);
});

//updating data on the bsis of id on client side and in mongo db
app.put("/Update-user/:id", async (req, res) => {
  let result = await User.updateOne(
    { _id: req.params.id },

    { $set: req.body }

    // {$set:req.params.name},
    // {$set:req.params.address},
    // {$set:req.params.email},
    // {$set:req.params.password},
  );
  res.send(result);
});

// Api for searching data in userlist
app.get("/search/:key", async (req, res) => {
  let result =await User.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        address: { $regex: req.params.key },
      },
      {
        email: { $regex: req.params.key },
      },
      {
        password: { $regex: req.params.key },
      },
    ],
  });
  res.send(result)
});

//Server
const port = process.env.PORT || 5000; //.env to secure data
app.listen(port, () => {
  console.log(`hello  server ${port} from ${process.env.App_Mode}`.bgBlue);
});

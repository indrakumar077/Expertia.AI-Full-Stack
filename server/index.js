import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://indra16:9826391787@cluster0.8q4fmwf.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`connected to ${process.env.PORT}`);
    })
  )
  .catch((e) => console.log(e));

app.use("/auth", AuthRoute);
app.use("/task", UserRoute);

import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";
import { RoomRouter } from "./routes/roomRoutes.js";
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//api
app.use('/api/study-nook',RoomRouter)

await connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

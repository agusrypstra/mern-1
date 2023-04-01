import mongoose from "mongoose";
import { config } from "dotenv";
config();
const URI = process.env.MONGODB_URI;

export default function connectToDB() {
  mongoose.connect(URI, {});
  mongoose.connection.once("open", () => {
    console.log("DB is connected");
  });
}

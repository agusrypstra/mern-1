import mongoose from "mongoose";
import { config } from "dotenv";
config();
const URI = process.env.MONGODB_URI;
const db = {};
db.connectToDB = () => {
  mongoose.connect(URI, {});
  const connection = mongoose._connection;

  mongoose.connection.once("open", () => {
    console.log("DB is connected");
  });
};
export default db;

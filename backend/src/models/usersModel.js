import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});
export default model("User", userSchema);

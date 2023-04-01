import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  client: String,
  device: Object,
});

export default model("Order", orderSchema);

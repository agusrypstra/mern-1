import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default model("Order", orderSchema);

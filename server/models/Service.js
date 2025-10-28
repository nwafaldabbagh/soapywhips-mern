import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  priceUSD: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);

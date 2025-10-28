import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  make: String,
  model: String,
  year: Number,
  color: String,
  plate: String
}, { timestamps: true });

export default mongoose.model("Vehicle", vehicleSchema);

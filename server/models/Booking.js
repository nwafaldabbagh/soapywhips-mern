import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["scheduled","completed","canceled"], default: "scheduled" },
  notes: String
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);

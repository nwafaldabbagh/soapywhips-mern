import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  fullName: { type: String, required: true },
  phone: String
}, { timestamps: true });

export default mongoose.model("Customer", customerSchema);

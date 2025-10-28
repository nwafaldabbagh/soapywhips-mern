import express from "express";
import Booking from "../models/Booking.js";
import Vehicle from "../models/Vehicle.js";
import Customer from "../models/Customer.js";
import { auth, requireRole } from "../middleware/auth.js";
const router = express.Router();

router.get("/mine", auth, async (req, res) => {
  const customer = await Customer.findOne({ user: req.user.id });
  if (!customer) return res.json([]);
  const vehicles = await Vehicle.find({ customer: customer._id }).select("_id");
  const ids = vehicles.map(v => v._id);
  const items = await Booking.find({ vehicle: { $in: ids } }).populate("vehicle service");
  res.json(items);
});
router.post("/mine", auth, async (req, res) => {
  const customer = await Customer.findOne({ user: req.user.id });
  const vehicle = await Vehicle.findById(req.body.vehicleId);
  if (!customer || !vehicle || String(vehicle.customer) != String(customer._id))
    return res.status(403).json({ message: "Not your vehicle" });
  const doc = await Booking.create({
    vehicle: vehicle._id,
    service: req.body.serviceId,
    date: new Date(req.body.date),
    notes: req.body.notes
  });
  res.status(201).json(doc);
});

router.get("/", auth, requireRole("admin"), async (req, res) => {
  const items = await Booking.find().populate("vehicle service");
  res.json(items);
});
router.put("/:id", auth, requireRole("admin"), async (req, res) => {
  const doc = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
});
router.delete("/:id", auth, requireRole("admin"), async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;

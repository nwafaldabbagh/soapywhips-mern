import express from "express";
import Vehicle from "../models/Vehicle.js";
import Customer from "../models/Customer.js";
import { auth, requireRole } from "../middleware/auth.js";
const router = express.Router();

router.get("/mine", auth, async (req, res) => {
  const customer = await Customer.findOne({ user: req.user.id });
  if (!customer) return res.json([]);
  const v = await Vehicle.find({ customer: customer._id });
  res.json(v);
});
router.post("/mine", auth, async (req, res) => {
  const customer = await Customer.findOne({ user: req.user.id });
  if (!customer) return res.status(400).json({ message: "Create profile first" });
  const v = await Vehicle.create({ ...req.body, customer: customer._id });
  res.status(201).json(v);
});

router.get("/", auth, requireRole("admin"), async (req, res) => {
  res.json(await Vehicle.find().populate("customer"));
});
router.delete("/:id", auth, requireRole("admin"), async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;

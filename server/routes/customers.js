import express from "express";
import Customer from "../models/Customer.js";
import { auth, requireRole } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, requireRole("admin"), async (req, res) => {
  res.json(await Customer.find().populate("user"));
});

router.get("/me", auth, async (req, res) => {
  const c = await Customer.findOne({ user: req.user.id });
  res.json(c || null);
});
router.post("/me", auth, async (req, res) => {
  const { fullName, phone } = req.body;
  const c = await Customer.findOneAndUpdate(
    { user: req.user.id },
    { user: req.user.id, fullName, phone },
    { upsert: true, new: true }
  );
  res.json(c);
});

export default router;

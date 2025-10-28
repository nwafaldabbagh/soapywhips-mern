import express from "express";
import Service from "../models/Service.js";
import { auth, requireRole } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const items = await Service.find().sort({ createdAt: -1 });
  res.json(items);
});

router.post("/", auth, requireRole("admin"), async (req, res) => {
  const doc = await Service.create(req.body);
  res.status(201).json(doc);
});
router.put("/:id", auth, requireRole("admin"), async (req, res) => {
  const doc = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
});
router.delete("/:id", auth, requireRole("admin"), async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;

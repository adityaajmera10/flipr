const express = require("express");
const Newsletter = require("../models/Newsletter");

const router = express.Router();

router.get("/", async (req, res) => {
  const subscribers = await Newsletter.find();
  res.json(subscribers);
});

router.post("/", async (req, res) => {
  const { email } = req.body;
  const subscriber = new Newsletter({ email });
  await subscriber.save();
  res.status(201).json(subscriber);
});

module.exports = router;

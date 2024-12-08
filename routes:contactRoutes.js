const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.post("/", async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  const contact = new Contact({ fullName, email, mobile, city });
  await contact.save();
  res.status(201).json(contact);
});

module.exports = router;

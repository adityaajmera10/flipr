const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Client = require("../models/Client");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { name, description, designation } = req.body;
  const imagePath = `uploads/${req.file.filename}-cropped.jpg`;

  await sharp(req.file.path)
    .resize(450, 350)
    .toFile(imagePath);

  const client = new Client({ name, description, designation, image: imagePath });
  await client.save();
  res.status(201).json(client);
});

module.exports = router;

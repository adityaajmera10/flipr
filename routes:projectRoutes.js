const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Project = require("../models/Project");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  const imagePath = `uploads/${req.file.filename}-cropped.jpg`;

  await sharp(req.file.path)
    .resize(450, 350)
    .toFile(imagePath);

  const project = new Project({ name, description, image: imagePath });
  await project.save();
  res.status(201).json(project);
});

module.exports = router;

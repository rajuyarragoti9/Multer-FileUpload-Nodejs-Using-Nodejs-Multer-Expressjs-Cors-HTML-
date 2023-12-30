const express = require("express");
const multer = require("multer");

const cors = require("cors");

const app = express();

app.use(cors());

const ds = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, "uploads/");
    } catch (error) {
      console.error("Error in destination callback:", error);
      cb(error, null);
    }
  },
  filename: (req, file, cb) => {
    try {
      cb(null, Date.now() + file.originalname);
    } catch (error) {
      console.error("Error in filename callback:", error);
      cb(error, null);
    }
  },
});

const upload = multer({
  storage: ds,
});

app.post("/upload", (req, res) => {
  try {
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).send("Multer error");
      } else if (err) {
        console.error("Unknown error:", err);
        return res.status(500).send("Unknown error");
      }
      res.send("uploaded successfully");
    });
  } catch (error) {
    console.error("Error in upload middleware:", error);
    res.status(500).send("Error during upload");
  }
});

app.listen(5000, () => {
  console.log("server running at port no 5000");
});

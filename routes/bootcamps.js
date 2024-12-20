const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Created new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated bootcamp with id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleted bootcamp with id ${req.params.id}` });
});

module.exports = router;

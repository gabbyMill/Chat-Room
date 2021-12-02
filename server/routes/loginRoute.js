import express from "express";
const router = express.Router();

router.get("/:input", (req, res, next) => {
  const input = req.params.input;
  res.json(input);
});

export default router;

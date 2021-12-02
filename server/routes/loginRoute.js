import express from "express";
const router = express.Router();

router.get("/:input", (req, res, next) => {
  // This can also be a middleware authorization and not a route
  const input = req.params.input;
  // Psuedo:
  let inputExists; // only here temporarily so line below  it won't throw errors
  if (!inputExists) return; // Access Denied
  res.json(true); // Authorize access to chat room
});

export default router;

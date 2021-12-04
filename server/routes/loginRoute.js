import express from "express";
const router = express.Router();

router.get("/:username", (req, res, next) => {
  // This can also be a middleware authorization and not a route
  const { username } = req.params;
  // Psuedo:
  let inputExists = true; // only here temporarily so line below  it won't throw errors
  if (!inputExists) res.status(404).json("Access denied"); // Access Denied

  res.send("login successful");
});

export default router;

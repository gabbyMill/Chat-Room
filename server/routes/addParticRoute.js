import express from "express";
import Participant from "../models/Participant.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log("participant");
  const { username } = req.body;
  try {
    if (!username) throw { status: 500, message: "Invalid Username" };
    const success = await Participant.create({ username });
    if (!success) throw { status: 500, message: "Couldn't create new user" };
    res.json(success);
  } catch (err) {
    res.json(err);
    // next(err);
  }
});

export default router;

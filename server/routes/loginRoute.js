import express from "express";
import Participant from "../models/Participant.js";
const router = express.Router();

router.get("/:username", async (req, res, next) => {
  try {
    // This can also be a middleware authorization and not a route
    const { username } = req.params;
    if (!username) throw { status: 500, message: "Invalid Username" };
    const allParticipants = await Participant.find({});
    console.log(allParticipants);
    const flag = allParticipants.every(
      part => part.user.toLowerCase() !== username.toLowerCase()
    );
    console.log(flag);
    if (!flag) throw { status: 403, message: "Name taken" };
    await Participant.create({ username });
    const answer = await Participant.find({});
    res.json(answer);
  } catch (err) {
    res.json(err);
    // next(err)
  }
});

export default router;

import express from "express";
import axios from "axios";
import Participant from "../models/Participant.js";
import jwt from "jsonwebtoken";

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = status => {
  return status < 500;
};
const router = express.Router();

/* ======================================================== */
/* ======================================================== */

let CONNECTED_USERS;
(async () => {
  CONNECTED_USERS = await Participant.find({});
  // CONNECTED_USERS = await Participant.find({ online: true });
})();

function sendMessageToAll(name, text, time) {
  CONNECTED_USERS.forEach(connection => {
    const obj = { name, text, time: new Date() };
    connection.res.write(`data: ${JSON.stringify(obj)} \n\n`);
  });
}

router.get("/", (req, res, next) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
  });
  const { inputValue } = "guest"; // username buld it fucker
  if (!CONNECTED_USERS) return; // Otherwise, tries to push into a not yet initialized version of ConnectedUsers
  if (!inputValue) return;
  CONNECTED_USERS.push({ username: inputValue, res });

  CONNECTED_USERS.forEach(item => {
    res.write(`data: ${inputValue} has now connected \n\n`);
  });
  req.on("close", () => {
    // Here you should add dissconnetion functionality, send a message to all other users
  });
});

router.post("/newmsg", (req, res, next) => {
  const { message, state } = req.body;
  console.log(message, state);
  if (!message && !state) return;
  sendMessageToAll(state, message);
  res.end(); // can edit this to return a value
});

router.get("/:username", async (req, res, next) => {
  try {
    // This can also be a middleware authorization and not a route
    const { username } = req.params;
    if (!username) throw { status: 401, message: "Invalid Username" };
    const allParticipants = await Participant.find({});
    console.log(allParticipants);
    const isUsernameTaken = allParticipants.some(
      participant => participant.user.toLowerCase() === username.toLowerCase()
    );
    console.log(isUsernameTaken);
    if (isUsernameTaken) throw { status: 409, message: "Name taken" };
    const userToken = jwt.sign(username, process.env.secretKey);
    await Participant.create({ username, token: userToken, online: false });
    // const answer = await Participant.find({})
    res.json(userToken);
  } catch (err) {
    res.json(err);
    // next(err)
  }
});

export default router;

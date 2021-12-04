import express from "express";
import axios from "axios";

// import { EventEmitter } from 'events'
// const emitter = new EventEmitter()

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = status => {
  return status < 500;
};
const router = express.Router();
/* =========================== */

const CONNECTED_USERS = [];

function sendMessageToAll(name, text, time) {
  CONNECTED_USERS.forEach(connection => {
    const obj = { name, text, time: new Date() };
    connection.res.write(`data: ${JSON.stringify(obj)} \n\n`);
  });
}

router.post("/newmsg", (req, res, next) => {
  const { message, state } = req.body;
  console.log(message, state);
  if (!message && !state) return;
  sendMessageToAll(state, message);
  res.end(); // can edit this to return a value
});

router.get("/", (req, res, next) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
  });
  const { inputValue } = "guest"; // username buld it fucker
  CONNECTED_USERS.push({ username: inputValue, res });

  CONNECTED_USERS.forEach(item => {
    res.write(`data: ${inputValue} has now connected \n\n`);
  });
  req.on("close", () => {
    // Here you should add dissconnetion functionality, send a message to all other users
  });
});

export default router;

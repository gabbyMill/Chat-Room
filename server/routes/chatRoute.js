/* =========================== */

import express from 'express'
import axios from 'axios'
import Participant from '../models/Participant.js'
import Message from '../models/Message.js'

/* =========================== */

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = (status) => {
  return status < 500
}
const router = express.Router()

/* =========================== */

// const usersConnectionStreams = Participant.find({ online: true })
const usersConnectionStreams = []

function dispatchMessageToAll(name, text, time) {
  usersConnectionStreams.forEach((connection) => {
    const message = { name, text, time }
    connection.res.write(`data: ${JSON.stringify(message)} \n\n`)
  })
}

router.post('/newmsg', (req, res, next) => {
  const { message, state } = req.body
  console.log(message, state)
  if (!message && !state) return
  dispatchMessageToAll(state, message)
  res.end() // can edit this to return a value
})

router.get('/', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
  })
  Message.find({})
    .then((result) => res.write(result))
    .catch((err) => {
      res.write('an error has occured!')
    })

  req.on('close', () => {
    // Here you should add dissconnetion functionality, send a message to all other users
  })
})

router.get('/users', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
  })
  //each time someone connects to this route, a unique res instance is created. performing the method 'res.write' on a unique res will send a stream to that specific res.
  usersConnectionStreams.push({ username: 'guest', res })

  // inform everyone in the chat that a new user came in
  usersConnectionStreams.forEach((user) => {
    user.res.write(`data: ${'guset'} has now connected \n\n`)
  })
  req.on('close', () => {
    // Here you should add dissconnetion functionality, send a message to all other users
  })
})

export default router

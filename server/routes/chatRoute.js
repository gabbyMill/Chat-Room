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

function dispatchMessageToAll(obj) {
  usersConnectionStreams.forEach((connection) => {
    connection.res.write(`data: ${obj} \n\n`)
  })
}

router.post('/newmsg', async (req, res, next) => {
  const { message, username, time } = req.body
  if (!message && !username && !time) return
  await Message.create({ username, message, time })
  dispatchMessageToAll({ username, message, time })

  // if (flag.length < 1) return

  res.end() // can edit this to return a value
})

router.get('/', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
  })
  // Send message history on initial connection
  Message.find({})
    .then((messages) => res.write(`data: ${messages} \n\n`))
    .catch((err) => {
      res.write('an error has occured!')
    })

  // Send chat particiapnts on initial connection

  res.write(`data: ${usersConnectionStreams.map((item) => item.username)} \n\n`)

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
    user.res.write(`data: ${'guest'} has now connected \n\n`)
  })
  req.on('close', () => {
    // Here you should add dissconnetion functionality, send a message to all other users
  })
})

export default router

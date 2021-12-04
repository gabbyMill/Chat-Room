import express from 'express'
import Participant from '../models/Participant.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.get('/:username', async (req, res, next) => {
  try {
    // This can also be a middleware authorization and not a route
    const { username } = req.params
    if (!username) throw { status: 401, message: 'Invalid Username' }
    const allParticipants = await Participant.find({})
    console.log(allParticipants)
    const isUsernameTaken = allParticipants.some(
      (participant) => participant.user.toLowerCase() === username.toLowerCase()
    )
    console.log(isUsernameTaken)
    if (isUsernameTaken) throw { status: 409, message: 'Name taken' }
    const userToken = jwt.sign(username, process.env.secretKey)
    await Participant.create({ username, token: userToken, online: false })
    // const answer = await Participant.find({})
    res.json(userToken)
  } catch (err) {
    res.json(err)
    // next(err)
  }
})

export default router

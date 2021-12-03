import express from 'express'
const router = express.Router()

router.get('/:username', (req, res, next) => {
  // This can also be a middleware authorization and not a route
  const { username } = req.params
  console.log(username)
  // Psuedo:
  let inputExists = true // only here temporarily so line below  it won't throw errors
  if (!inputExists) res.status(404).json('Access denied') // Access Denied

  // res.writeHead(200, 'username-header', { username })

  // res.json(123)

  res.redirect(`http://localhost:8080/chat:${username}`)

  // res.json(inputExists) // Authorize access to chat room
})

export default router

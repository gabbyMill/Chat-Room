import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
  // username
  // This can also be a middleware authorization and not a route
  // const { username } = req.params
  // Psuedo:
  // let inputExists = true // only here temporarily so line below  it won't throw errors
  // if (!inputExists) res.status(404).json('Access denied') // Access Denied
  // res.writeHead(200, 'username-header', { username })
  console.log(123123)
  res.json(123)
  // res.redirect(`./chat`)

  // res.json(inputExists) // Authorize access to chat room
})

export default router

import express from 'express'
import axios from 'axios'
import data from './db.js'

// import path from 'path'
// const dbDir = path.join(path.dirname(''), '../', 'db.js')

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = (status) => {
  return status < 500
}
const router = express.Router()

let count = 0

router.get('/', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
  })
  setTimeout(async function something() {
    const messages = await fetchMessages()
    console.log(messages)
    let data = JSON.stringify(messages)
    res.write(data)
  }, 3000)
})

async function fetchMessages() {
  try {
    // const data = await axios.request(options)
    // return data.data.quoteResponse.result
    return data
  } catch (error) {
    return error
  }
}

export default router

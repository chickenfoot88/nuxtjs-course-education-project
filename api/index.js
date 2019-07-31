const express = require('express')

const router = express.Router()

const app = express()
router.use((request, response, next) => {
  Object.setPrototypeOf(request, app.request)
  Object.setPrototypeOf(response, app.response)
  request.response = response
  response.request = request
  next()
})

router.post('/track-data', (request, response) => {
  console.log('Stored data!', request.body.data)
  response.status(200).json({ message: 'Success!'})
})

module.exports = {
  path: '/api',
  handler: router
}
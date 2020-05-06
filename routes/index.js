const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' })
})

router.post('/', (req, res) => {
  res.send('Got a POST request')
})

router.put('/', (req, res) => {
  res.send('Got a PUT request')
})

router.delete('/', (req, res) => {
  res.send('Got a DELETE request')
})

module.exports = router

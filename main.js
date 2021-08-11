'use strict'

const exp = require('constants')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('App started at http://localhost:3000')
})

__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/tictactoe', (req, res) => {
    res.sendFile(__path + '/views/tictactoe.html')
})

router.get('/snake', (req, res) => {
    res.sendFile(__path + '/views/snake.html')
})

__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/tictactoe', (req, res) => {
    res.sendFile(__path + '../tictactoe.html')
})

router.get('/snake', (req, res) => {
    res.sendFile(__path + '../snake.html')
})

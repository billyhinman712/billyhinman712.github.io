var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('project navigation route');
});

route.get('/monsters-within', function(req, res){
	res.send('Game project');
});

router.get('/story-board', function(req, res){
	res.send('database project');
});

module.exports = router;
var express = require('express');
var router = express.Router();

var calendar = require('../module/calendar');

router.get('/', function(req, res, next) {
	var date = new Date(),
		year = date.getFullYear(),
		json = {
			title: year + ' 日历',
			data: calendar(year)
		}
	res.render('index', json);
});

// router.get('/', function(req, res){
//   res.json({
//   	MI: 'MI',
//   	DSD: 'SAD'
//   });
// });

module.exports = router;

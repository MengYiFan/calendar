var express = require('express');
var router = express.Router();

var calendar = require('../module/calendar');

router.get('/', function(req, res, next) {
	var date = new Date(),
		year = date.getFullYear();
	
	year = 2016;

	var	json = {
			title: year + ' 日历',
			data: calendar(year)
		}

	res.render('calendar', json);
});

router.get('/:year', function(req, res, next) {
	var year;
	if ( !isNaN(req.params.year) ) {
		year = req.params.year;
	}
	// req.session.name = 'name2mish';
	var json = {
		title: year + ' 日历',
		data: calendar(year)
	}
	res.render('calendar', json);
});

module.exports = router;

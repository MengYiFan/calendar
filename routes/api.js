var express = require('express');
var router = express.Router();

var calendar = require('../api/calendar');

router.get('/get/calendar/:year', function (req, res, next) {
	var year = req.params.year,
		data = calendar.getData('mi', year);

	res.json(data);
});

router.get('/get/calendar/:year/:mouth/:day', function (req, res, next) {
	var year = req.params.year,
		mouth = req.params.mouth,
		day = req.params.day,
		data = calendar.getDataDefinite('mi', year, mouth, day);

	res.json(data);
});

module.exports = router;
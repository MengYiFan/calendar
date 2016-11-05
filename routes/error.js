var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('error', {
		title: 'error 程序好像出错了~',
		data: {
			content: '抱歉, 程序好像出错了~'
		}
	});
});

module.exports = router;

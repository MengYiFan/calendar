var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!!req.session.name) {
		res.send(req.session.name);
	} else {
		res.render('404', {
			title: '404 页面未发现~',
			data: {
				content: '抱歉, 页面好像没有找到~'
			}
		});
	}
});

module.exports = router;

var fs = require('fs');

var Router = {
	getConfig: function () {
		return JSON.parse(fs.readFileSync('data/routesConfig.json'));
	},
	init: function (app) {
		var config = Router.getConfig();
		for (var key in config) {
			var val = config[key];
			for ( var k in val ) {
				if ( key == 'router' ) {// 路由配置
					app.use(k, require(val[k]));
					// console.log( k + '#' + val[k] + '\n');
				}
			}
		}
	}
};

module.exports = Router;


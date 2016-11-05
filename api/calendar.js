var fs = require('fs');

var Calendar = {
	getData: function (user, year) {
		return JSON.parse(fs.readFileSync('data/' + user + '_' + year + '.json'));
	},
	test: function (user, year) {
		return '#' + ('data/' + user + '_' + year + '.json');
	},
	getDataDefinite: function (user, year, mouth, day) {
		var data = Calendar.getData(user, year),
			v = 11, status = 'ERR';
		if ( data['y' + year] && data['y' + year]['m' + mouth] && (typeof data['y' + year]['m' + mouth]['d' + day]) !== 'undefined' ) {
			v = data['y' + year]['m' + mouth]['d' + day];
			status = 'TRUE';
		}
		return {
			status: status,
			value: v
		}
	}
};

module.exports = Calendar;
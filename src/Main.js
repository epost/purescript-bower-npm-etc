const wuu = require("wuu")

exports.wuu = function (port) {
	return function () {
		return wuu(port)
			.then(function () {
				console.log('asdf')
			})
	}
}


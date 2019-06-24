const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.scheme = function() {
	return new Scheme({
		id_medIn: Number,
		name: String
	});
}

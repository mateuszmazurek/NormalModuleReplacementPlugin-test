var assert = require('assert');
var string = require('./string');

describe('NormalModuleReplacementPlugin', function() {
	it('should use ./string-replacement instead of ./string', function() {
		assert.equal('replacement string', string);
	});
});
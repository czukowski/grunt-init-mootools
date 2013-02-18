/*
---
name: {%= classname %} Specs
description: n/a
requires: [{%= classname %}]
provides: [{%= classname %}.Specs]
...
*/

describe('{%= classname %}', function() {

	// Put your specs here

	describe('Constructor test', function() {

		it('should export constructor', function() {
			{%= classname %}.should.be.a('function');
		});

	});

});
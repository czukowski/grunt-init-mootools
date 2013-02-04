/*
---
name: {%= name %} Specs
description: n/a
requires: [{%= name %}]
provides: [{%= name %}.Specs]
...
*/

describe('{%= name %}', function() {

	// Put your specs here

	describe('Constructor test', function() {
		it('should export constructor', function() {
			{%= name %}.should.be.a('function');
		});
	});

});
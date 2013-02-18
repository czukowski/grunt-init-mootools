/*
---
name: {%= classname %}
description: {%= description %}.
license: {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
authors:
 - {%= author_name %}
requires: 
provides: {%= classname %}
...
*/
{% if (pathDepth === 0) { %}
var {%= classname %} = new Class({
{% } else { %}
new Class('{%= classname %}', {
{% } %}
	// Put your code here

	initialize: function() {

	}

});
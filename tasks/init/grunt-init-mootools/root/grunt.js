/*global module:false*/
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		meta: {
			banner: '/**\n' +
				' * {%= title || name %} - v{%= version %} - {%= grunt.template.today("yyyy-mm-dd") %}\n' +
				'{%= homepage ? " * " + homepage + "\n" : "" %}' +
				' * Copyright (c) {%= grunt.template.today("yyyy") %} {%= author_name %};\n' +
				' * License: {%= licenses.join(", ") %}\n' +
				' */'
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', '<file_strip_banner:Source/{%= name %}.js>'],
				dest: 'Dist/{%= name %}.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'Dist/{%= name %}-min.js'
			}
		},
		mocha: {
			all: ['Specs/**/*.html']
		},
		lint: {
			files: ['grunt.js', 'Source/**/*.js', 'Specs/**/*.js']
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint mocha'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				// For MooTools
				Class: true,
				{%= name %}: true,
				// For specs
				describe: true,
				it: true
			}
		},
		uglify: {}
	});

	// Load mocha module - install to your project dir with: `npm install grunt-mocha`
	grunt.loadNpmTasks('grunt-mocha');

	// Default task
	grunt.registerTask('default', 'lint mocha concat min');

};

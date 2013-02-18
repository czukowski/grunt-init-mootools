/**
 * class.js
 * 
 * Copyright (c) 2013 Korney Czukowski
 * Licensed under the MIT license.
 */
'use strict';

// Basic template description.
exports.description = "Create a MooTools class stub, including specs and API docs.";

// Do not warn about existing files
exports.warnOn = null;

// The actual init template
exports.template = function(grunt, init, done) {

	// Check for the existing package.yml
	var fs = require('fs');
	if ( ! fs.existsSync('package.yml')) {
		grunt.warn(
			'The file package.yml not found. Make sure you have initialized the MooTools project first:\n'
			+'grunt-init-mootools init:mootools\n'
		);
	}

	// Read additional properties like author_name, licenses, etc from the package.yml
	var packageOptions = require('js-yaml')
		.load(grunt.file.read('package.yml'));

	// Prompt for these values
	grunt.helper(
		'prompt',
		[
			{
				name: 'classname',
				message: 'Class name',
				default: 'MyClass',
				validator: function(value) {
					// Check if files with the required names already exist
					var filesToCopy = init.filesToCopy({pathname: value.replace(/\./g, '/')});
					for (var file in filesToCopy) {
						if (fs.existsSync(file)) {
							grunt.log.writeln('error'.red+':  '+file.grey+' already exists! Please choose another class name.');
							return;
						}
					}
					return true;
				},
				warning: 'Must be a valid class name, that would not result in overwrite of any existing file.'
			},
			grunt.helper('prompt_for', 'description', 'This class does things you couldn\'t imagine possible'),
			grunt.helper('prompt_for', 'licenses', packageOptions.licenses ? packageOptions.licenses.join(' ') : 'MIT'),
			grunt.helper('prompt_for', 'author_name'),
			grunt.helper('prompt_for', 'author_email'),
			grunt.helper('prompt_for', 'author_url')
		],
		function(err, props) {
			// Auto-generated props
			props.pathname = props.classname.replace(/\./g, '/');
			props.pathDepth = props.pathname.replace(/[^\/]/g, '').length;

			// Files to copy (and process)
			var files = init.filesToCopy(props);

			// Actually copy (and process) files
			init.copyAndProcess(files, props);

			// All done!
			done();
		}
	);
};

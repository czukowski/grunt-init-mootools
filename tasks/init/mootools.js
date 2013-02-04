/**
 * mootools.js
 * 
 * Copyright (c) 2013 Korney Czukowski
 * Licensed under the MIT license.
 */
'use strict';

// Basic template description.
exports.description = "Create a MooTools plugin stub, including specs and API docs.";

// Template-specific notes to be displayed before question prompts
exports.notes = "After you initialize the project, install the grunt-mocha module to this dir:\n"+
	"npm install grunt-mocha";

// Any existing file or directory matching this wildcard will cause a warning
exports.warnOn = "*";

// The actual init template
exports.template = function(grunt, init, done) {

	// File names of the license files are altered compared to default grunt logic:
	// If only one license is used, the file is LICENSE.md, else they are LICENSE-<name>.md
	var getLicenseFilePath = function(license) {
		var fileobj = grunt.task.expandFiles('init/licenses/LICENSE-'+license)[0];
		return fileobj ? fileobj.rel : null;
	};
	init.addLicenseFiles = function(files, licenses) {
		if (licenses.length > 1) {
			licenses.forEach(function(license) {
				files['LICENSE-'+license+'.md'] = getLicenseFilePath(license);
			});
		}
		else if (licenses.length === 1) {
			files['LICENSE.md'] = getLicenseFilePath(licenses[0]);
		}
	};

	grunt.helper('prompt', {}, [
		// Prompt for these values
		grunt.helper('prompt_for', 'name', 'Test'),
		grunt.helper('prompt_for', 'title', function(value, data, done) {
			// Fix MooTools capitalization
			value = value.replace(/mootools/gi, 'MooTools');
			done(null, value);
		}),
		grunt.helper('prompt_for', 'description', 'The best MooTools plugin ever'),
		grunt.helper('prompt_for', 'version'),
		grunt.helper('prompt_for', 'repository'),
		grunt.helper('prompt_for', 'homepage'),
		grunt.helper('prompt_for', 'bugs'),
		grunt.helper('prompt_for', 'licenses', 'MIT'),
		grunt.helper('prompt_for', 'author_name'),
		grunt.helper('prompt_for', 'author_email'),
		grunt.helper('prompt_for', 'author_url'),
		{
			name: 'mootools_version',
			message: 'Required MooTools version',
			default: '>= 1.4',
			warning: 'Must be a valid semantic version range descriptor.'
		}
	], function(err, props) {
		// A few additional properties
		props.dependencies = {mootools: props.mootools_version || '>= 1.4'};
		props.keywords = [];

		// Files to copy (and process)
		var files = init.filesToCopy(props);

		// Add properly-named license files
		init.addLicenseFiles(files, props.licenses);

		// Actually copy (and process) files
		init.copyAndProcess(files, props);

		// All done!
		done();
	});
};

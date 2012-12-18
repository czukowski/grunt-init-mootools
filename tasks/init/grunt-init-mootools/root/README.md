# {%= title || name %}

{%= description %}

## Getting started

Download the latest stable release version:

[![Zipball](http://github.com/images/modules/download/zip.png)](https://github.com/{%= git_user %}/{%= git_repo %}/archive/tag-name.zip)
[![Tarball](http://github.com/images/modules/download/tar.png)](https://github.com/{%= git_user %}/{%= git_repo %}/archive/tag-name.tar.gz)

In your web page:

```html
<script src="mootools.js"></script>
<script src="Source/{%= name %}.js"></script>
<script>
document.addEvent('ready', function() {
	// Initialize here
});
</script>
```

## Documentation

[API Docs](blob/master/Docs/{%= name %}.md)

## Examples

_(Coming soon)_

## License

Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}  
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}. 
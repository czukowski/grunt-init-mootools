MooTools plugin template (Grunt 0.3)
====================================

This is a boilerplate to generate MooTools plugins using [Grunt][1].

Please note, that it is for now-outdated Grunt 0.3 version. The new grunt-init that complements Grunt 0.4
doesn't seem to allow to put multiple templates into one package. The solution will probably be to create
a [yo generator][4] instead.

Getting Started
---------------

  1. Install this [Grunt][1] plugin with:
 
    ```bash
    $ npm install -g grunt-init-mootools
    ```

  2. Create a new grunt MooTools plugin stub in an empty directory

    ```bash
    $ grunt-init-mootools init:mootools
    ```

  3. Answer some questions.

  4. Now you have your new plugin stub ready. These files with the placeholder code have been created:

    * Docs
      * ProjectName.md
    * Source
      * ProjectName.js
    * Specs
      * ProjectName.js
      * Tests.html
    * grunt.js
    * README.md
    * LICENSE.md
    * package.yml

Now just add code, specs and API docs into the prepared template files

One Source file not enough?
---------------------------

  1. To create additional set of a source, specs and docs files, type in your previously initialized project directory:

    ```bash
    $ grunt-init-mootools init:class
    ```

  2. Answer some questions.

  3. You're done, have fun.

License & acknowledgments
-------------------------

This work is based on [Grunt init template generator][2] from [Rodrigo Valerio][3] and borrows a lot from [Grunt][1]'s own init templates.

Copyright (c) 2013 Korney Czukowski. Licensed under the MIT license.

  [1]: http://gruntjs.com/
  [2]: https://npmjs.org/package/grunt-init-plugin
  [3]: https://github.com/rsvalerio
  [4]: http://yeoman.io/
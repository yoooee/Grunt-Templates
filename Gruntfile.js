'use strict';

module.exports = function (grunt) {
    
    var config = {};

    config['pkg'] = grunt.file.readJSON('package.json');
    
    grunt.initConfig(config);

    var tasks = [];

    grunt.registerTask('default', tasks);
};

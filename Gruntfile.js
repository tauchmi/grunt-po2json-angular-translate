/*
 * grunt-po2json-angular-translate
 * https://github.com/root/grunt-po2json-angular-translate
 *
 * Copyright (c) 2013 danielavalero
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        clean: {
            tests: ['tmp'],
        },

        po2json_angular_translate: {
            button: {
                options: {
                    pretty: true,
                    upperCaseId: false,
                },
                files: {
                    'tmp/' : ['test/fixtures/button.po']
                },
            }
        },

        nodeunit: {
            tests: ['test/*_test.js'],
        },

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('test', ['clean', 'po2json_angular_translate', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);

};

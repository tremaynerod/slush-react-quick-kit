'use strict';

var gulp = require('gulp');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var rename = require('gulp-rename');
var inquirer = require('inquirer');
var prompts = require('./prompts');
var transform = require('./transform');
var runSequence = require('run-sequence');

var generate = function (done) {  
    inquirer.prompt(prompts, function (responses) {

        responses = transform(responses)

        gulp.task('core', function () {  
            return gulp.src(__dirname + '/../templates/core/**')
                        .pipe(template(responses))
                        .pipe(rename(function (file) {
                            if (file.basename[0] === '_') {
                                file.basename = '.' + file.basename.slice(1);
                            }
                        }))
                        .pipe(gulp.dest('./'))
                        .pipe(install()) 
        });

        gulp.task('example', function () {  
            return gulp.src(__dirname + '/../templates/optional/example/**')
                        .pipe(gulp.dest('./main/app'))
        });

        gulp.task('sub-generators', function () {  
            return gulp.src(__dirname + '/../templates/sub-generators/**')
                        .pipe(gulp.dest('./sub-generators'))
        });
        
        if (responses.addExample) {
            runSequence('core', 'example', 'sub-generators', done);
        }else {
            runSequence('core', 'sub-generators', done);
        }
    }); 
};

module.exports = generate;
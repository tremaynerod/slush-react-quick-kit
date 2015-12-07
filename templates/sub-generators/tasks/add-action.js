var gulp = require('gulp');
var rename = require('gulp-rename');
var install = require('gulp-install');
var template = require('gulp-template');
var insert = require('gulp-insert');
var stripLine = require('gulp-strip-line');
var _ = require('underscore.string');

var actionNameSlug = _.slugify(process.argv.slice(2));
var actionNameCamel = _.camelize(actionNameSlug);

var actionName = { 
	actionName: actionNameCamel
};

gulp.src(__dirname + '/../templates/action/**')
    .pipe(template(actionName))
    .pipe(rename(function (file) {
    	if(file.extname) {
        	file.basename = actionNameSlug;
    	}
    }))
    .pipe(gulp.dest('./main/app/actions/'))

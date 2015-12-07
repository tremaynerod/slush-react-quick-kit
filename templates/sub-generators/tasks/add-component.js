var gulp = require('gulp');
var rename = require('gulp-rename');
var install = require('gulp-install');
var template = require('gulp-template');
var insert = require('gulp-insert');
var stripLine = require('gulp-strip-line');
var _ = require('underscore.string');

var componentNameSlug = _.slugify(process.argv.slice(2));
var componentNameCamel = _.camelize(componentNameSlug);
var componentAction = capitalizeFirstLetter(componentNameSlug) + "Actions";
var actionExport = "import { default as " + componentAction + " } from \'./" + componentAction + ".js\';";
var componentName = { 
    componentName: componentNameCamel
};

gulp.src(__dirname + '/../templates/component/**')
    .pipe(template(componentName))
    .pipe(rename(function (file) {
        if(file.extname) {
            file.basename = componentNameSlug;
        }
    }))
    .pipe(gulp.dest('./main/app/components/'+ componentNameSlug))

gulp.src(__dirname + '/../templates/action/**')
    .pipe(template(componentName))
    .pipe(rename(function (file) {
        if(file.extname) {
            file.basename = componentAction;
        }
    }))
    .pipe(gulp.dest('./main/app/actions/'))

gulp.src(__dirname + '/../../main/app/actions/index.js')
    .pipe(stripLine('use strict'))
    .pipe(insert.prepend(actionExport))
    .pipe(insert.prepend('\'use strict\'\n'))
    .pipe(gulp.dest('./main/app/actions'))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
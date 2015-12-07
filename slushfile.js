/*
 * slush-slush-test
 * https://github.com/trodrigues/slush-slush-test
 *
 * Copyright (c) 2015, Tremayne Rodrigues
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var generate = require('./slush/generate');
gulp.task('default', generate);
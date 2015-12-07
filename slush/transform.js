'use strict';

var _ = require('underscore.string');

var transform = function(answers) {
	answers.appNameSlug = _.slugify(answers.appName);
	return answers;
};

module.exports = transform;
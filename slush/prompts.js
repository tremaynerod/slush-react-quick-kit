'use strict';

var defaults = require('./defaults');

var prompts = [{
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
}, {
	type: 'confirm',
    name: 'addExample',
    message: 'Add an example component',
}];

module.exports = prompts;
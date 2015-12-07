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
}
//, {
//     name: 'appDescription',
//     message: 'What is the description?'
// }, {
//     name: 'appVersion',
//     message: 'What is the version of your project?',
//     default: '0.1.0'
// }, {
//     name: 'authorName',
//     message: 'What is the author name?',
//     default: defaults.authorName
// }, {
//     name: 'authorEmail',
//     message: 'What is the author email?',
//     default: defaults.authorEmail
// }, {
//     name: 'userName',
//     message: 'What is the github username?',
//     default: defaults.userName
// }
, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
}
];

module.exports = prompts;
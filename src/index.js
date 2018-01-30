// export function configure(config) {
//     config.globalResources('./ace-editor');
// }

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.configure = configure;

var _aceEditor = require('./ace-editor');

function configure(aurelia, callback) {
    aurelia.globalResources('./ace-editor');
}
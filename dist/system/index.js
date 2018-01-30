'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _aceEditor;

    function configure(aurelia, callback) {
        aurelia.globalResources('./ace-editor');
    }
    return {
        setters: [],
        execute: function () {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.configure = configure;

            _aceEditor = require('./ace-editor');
        }
    };
});
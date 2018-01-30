define(['exports', './ace-editor'], function (exports, _aceEditor) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia, callback) {
        aurelia.globalResources('./ace-editor');
    }
});
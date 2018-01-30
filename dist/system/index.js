

'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function configure(config) {
        config.aurelia.use.globalResources('./ace-editor');
    }
    return {
        setters: [],
        execute: function () {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.configure = configure;
        }
    };
});
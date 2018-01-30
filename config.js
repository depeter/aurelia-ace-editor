System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.9",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
    "npm:aurelia-polyfills@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    }
  }
});

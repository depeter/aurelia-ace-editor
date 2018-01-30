var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable, noView, customElement, processContent, Loader } from 'aurelia-framework';
import ace from 'ace';
import dedent from './dedent';
import { PropConverter } from './prop-converter';

export let AceEditor = (_dec = customElement('ace'), _dec2 = processContent(false), _dec3 = inject(Element, PropConverter, Loader), noView(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AceEditor {

    constructor(element, propConverter, loader) {
        _initDefineProp(this, 'content', _descriptor, this);

        _initDefineProp(this, 'options', _descriptor2, this);

        _initDefineProp(this, 'editor', _descriptor3, this);

        this.id = `ace-editor-${Math.floor((1 + Math.random()) * 0x10000)}`;

        this.element = element;
        this.propConverter = propConverter;
        this.ace = ace;
        this.innerHTML = this.element.innerHTML;
        this.loader = loader;
    }

    setValue() {
        let value = this.content || dedent(this.innerHTML);

        if (value) {
            this.editor.setValue(value, 1);
        }
    }

    contentChanged() {
        if (this.editor) {
            this.editor.setValue(this.content, 1);
        }
    }

    getAceSrcPath(loader) {
        let packagePath = loader.normalizeSync('ace');
        return packagePath.substr(0, packagePath.length - 3);
    }

    replacer(match) {
        return match.replace('-', '').toUpperCase();
    }

    parseConfigAttributes() {
        let attributes = this.element.attributes;
        let config = {};

        [].forEach.call(attributes, attribute => {
            if (attribute.name.indexOf('config-') !== -1) {
                let attributeName = attribute.name.replace('config-', '').replace(/-./g, this.replacer);
                config[attributeName] = this.propConverter.convert(attributeName, attribute.value);
            }
        });

        return config;
    }

    getConfig() {
        return Object.assign(this.parseConfigAttributes(), this.options);
    }

    bind() {
        this.element.setAttribute('id', this.id);

        this.config = Object.assign(this.getConfig());
        this.ace.config.set('basePath', this.getAceSrcPath(this.loader || System));

        this.editor = this.ace.edit(this.element);
        this.editor.$blockScrolling = Infinity;
        this.editor.setOptions(this.config);

        this.setValue();
    }

    detached() {
        this.editor.destroy();
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'content', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'editor', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class) || _class) || _class);
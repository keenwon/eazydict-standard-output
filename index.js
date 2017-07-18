'use strict';

const pkg = require('./package.json');

/**
 * EazyDict 词典插件标准输出对象
 */
class EDOutput {
  constructor(code, message) {
    this.pluginName = '';
    this.words = '';
    this.url = '';

    this.phonetics = [];
    this.translates = [];
    this.examples = [];

    this.version = pkg.version;
    this.error = new EDError(code, message);
  }
}

/**
 * 音标
 */
class Phonetic {
  constructor(type, value) {
    // 音标类型，例如 美
    this.type = type;

    // 音标值，例如 [həˈləʊ]
    this.value = value;
  }
}

/**
 * 翻译
 */
class Translate {
  constructor(type, trans) {
    // 词性，例如 n vt
    this.type = type;

    // 翻译
    this.trans = trans;
  }
}

/**
 * 例句
 */
class Example {
  constructor(from, to) {
    // 原句
    this.from = from;

    // 翻译
    this.to = to;
  }
}

const CODES = {
  SUCCESS: 0,
  0: 'SUCCESS',

  1: 'NETWORK_ERROR',
  NETWORK_ERROR: 1,

  2: 'PARSE_ERROR',
  PARSE_ERROR: 2,

  99: 'OTHER',
  OTHER: 99
};

class EDError {
  constructor(code = CODES.SUCCESS, message = '') {
    this.code = code;
    this.type = CODES[this.code] || '';
    this.message = message;
  }
}

module.exports = EDOutput;
module.exports.EDOutput = EDOutput;
module.exports.Phonetic = Phonetic;
module.exports.Translate = Translate;
module.exports.Example = Example;
module.exports.EDError = EDError;
module.exports.CODES = CODES;

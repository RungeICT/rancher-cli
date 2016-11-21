"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileAsync = readFileAsync;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFileAsync(path) {
  return _bluebird2.default.fromCallback(function (callback) {
    return _fs2.default.readFile(path, callback);
  });
}
//# sourceMappingURL=fs.js.map

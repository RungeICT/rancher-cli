"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logger() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  return {
    error: (0, _debug2.default)(prefix + "err" + suffix),
    info: (0, _debug2.default)(prefix + "info" + suffix),
    warn: (0, _debug2.default)(prefix + "warn" + suffix),
    debug: (0, _debug2.default)(prefix + "debug" + suffix),
    sql: (0, _debug2.default)(prefix + "debug:sql" + suffix)
  };
}
//# sourceMappingURL=logger.js.map

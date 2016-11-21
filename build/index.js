"use strict";

var _fs = require("./utils/fs");

var _path2 = require("path");

var _path3 = _interopRequireDefault(_path2);

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _rancherLib = require("rancher-lib");

var _logger = require("./utils/logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)("rancher-cli:index:");
var argv = (0, _minimist2.default)(process.argv.slice(2));

log.info("args", argv);

function loadFileConfig() {
  var promise = void 0;
  if (argv.file) {
    return (0, _fs.readFileAsync)(_path3.default.resolve(process.cwd(), argv.file)).then(function (data) {
      return JSON.parse(data);
    });
  }
  return Promise.resolve({});
}

loadFileConfig().then(function (config) {
  var connection = Object.assign({
    protocol: process.env.RCLI_PROTOCOL,
    env: process.env.RCLI_ENV,
    host: process.env.RCLI_HOST,
    username: process.env.RCLI_USERNAME,
    password: process.env.RCLI_PASSWORD
  }, config, argv);
  var env = new _rancherLib.Environment(connection, connection.env);
  var actionName = argv._[0];
  var actionTask = argv._[1];
  switch (actionName) {
    case "service":
      switch (actionTask) {
        case "restart":
          var _path = argv._[2];
          return env.getServiceByPath(_path).then(function (service) {
            return service.restart();
          });
      }
      break;
    case "container":
      switch (actionTask) {
        case "restart":
          var host = argv._[2];
          var container = argv._[3];
          return env.getContainerByHostAndName(host, container).then(function (container) {
            return container.restart();
          });
      }
      break;
  }
  return Promise.reject("Command not found");
}).then(function () {
  console.log("Task has been completed successfuly");
}, function (err) {
  console.log("An error has occurred", err);
});
//# sourceMappingURL=index.js.map

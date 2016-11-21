import {readFileAsync} from "utils/fs";
import path from "path";
import minimist from "minimist";
import {Environment} from "rancher-lib";
import logger from "utils/logger";

const log = logger("rancher-cli:index:");
const argv = minimist(process.argv.slice(2));

log.info("args", argv);

function loadFileConfig() {
  let promise;
  if(argv.file) {
    return readFileAsync(path.resolve(process.cwd(), argv.file))
      .then((data) => JSON.parse(data))
  } 
  return Promise.resolve({});
}

loadFileConfig().then((config) => {
  const connection = Object.assign({
    protocol: process.env.RCLI_PROTOCOL,
    env: process.env.RCLI_ENV,
    host: process.env.RCLI_HOST,
    username: process.env.RCLI_USERNAME,
    password: process.env.RCLI_PASSWORD,
  }, config, argv);
  const env = new Environment(connection, connection.env);
  const actionName = argv._[0];
  const actionTask = argv._[1];
  switch(actionName) {
    case "service":
      switch(actionTask) {
        case "restart":
          const path = argv._[2];
          return env.getServiceByPath(path)
           .then((service) => service.restart());
      }
      break;
    case "container":
      switch(actionTask) {
        case "restart":
          const host = argv._[2];
          const container = argv._[3];
          return env.getContainerByHostAndName(host, container)
           .then((container) => container.restart());
      }
      break;
  }
  return Promise.reject("Command not found");
}).then(() => {
  console.log("Task has been completed successfuly");
}, (err) => {
  console.log("An error has occurred", err);
});

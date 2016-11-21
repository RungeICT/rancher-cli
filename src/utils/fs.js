import fs from "fs";
import Promise from "bluebird";

export function readFileAsync(path) {
  return Promise.fromCallback((callback) => {
    return fs.readFile(path, callback);
  });
}
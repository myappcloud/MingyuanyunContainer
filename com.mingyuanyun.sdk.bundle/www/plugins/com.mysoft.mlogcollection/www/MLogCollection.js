cordova.define("com.mysoft.mlogcollection.MLogCollection", function(require, exports, module) {
var exec = require('cordova/exec');

exports.writeToFile = function(log,success, error) {
    exec(success, error, "MLogCollection", "writeToFile", [log]);
};
exports.getBasicInformation = function(success) {
    exec(success, null, "MLogCollection", "getBasicInformation", []);
};
exports.setLogCollectionLevel = function(level,success, error) {
    exec(success, error, "MLogCollection", "setLogCollectionLevel", [level]);
};
exports.setLogMaxSize = function(maxSize,success, error) {
    exec(success, error, "MLogCollection", "setLogMaxSize", [maxSize]);
};
exports.setCompressionNumber = function(number,success, error) {
    exec(success, error, "MLogCollection", "setCompressionNumber", [number]);
};
exports.setConfigParams = function(config,success, error) {
    exec(success, error, "MLogCollection", "setConfigParams", [config]);
};
exports.upLoadLogCollection = function(success, error) {
    exec(success, error, "MLogCollection", "upLoadLogCollection", []);
};


});

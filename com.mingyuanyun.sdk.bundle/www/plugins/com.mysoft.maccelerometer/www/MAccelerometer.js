cordova.define("com.mysoft.maccelerometer.MAccelerometer", function(require, exports, module) {
var exec = require('cordova/exec');

exports.start = function(success, error) {
    exec(success, error, "MAccelerometer", "start", []);
};
exports.stop = function(success,error) {
    exec(success, error, "MAccelerometer", "stop", []);
};
exports.vibration = function(success, error) {
    exec(success, error, "MAccelerometer", "vibration", []);
};
exports.startEvent = function(success, error,options) {
    exec(success, error, "MAccelerometer", "startEvent", [options]);
};
});

cordova.define("com.mysoft.msdkassistant.MSdkAssistant", function(require, exports, module) {
var exec = require('cordova/exec');

exports.close = function(options) {
    exec(null, null, "MSdkAssistant", "close", [options]);
};

exports.hide = function(options) {
    exec(null, null, "MSdkAssistant", "hide", [options]);
};

exports.show = function() {
    exec(null, null, "MSdkAssistant", "show", []);
};

exports.getSdkInfo = function(success) {
    exec(success, null, "MSdkAssistant", "getSdkInfo", []);
};

exports.addListener = function(success) {
    exec(success, null, "MSdkAssistant", "addListener", []);
};

exports.getUserInfo = function(success) {
    exec(success, null, "MSdkAssistant", "getUserInfo", []);
};



});

cordova.define("com.mysoft.mcordovawebview.MCordovaWebview", function(require, exports, module) {
var exec = require('cordova/exec');

function MCordovaWebview(){}

MCordovaWebview.prototype.Show = function(url, successCallback, errorCallback, options) {
	
    exec(successCallback, errorCallback, 'MCordovaWebView', 'show', [url, options]);
};

MCordovaWebview.prototype.Hide = function(successCallback, errorCallback, params) {
    exec(successCallback, errorCallback, 'MCordovaWebView', 'hide', params);
 };

MCordovaWebview.prototype.SubscribeCallback = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'MCordovaWebView', 'subscribeCallback', []);
};

MCordovaWebview.prototype.SubscribeExitCallback = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'MCordovaWebView', 'subscribeExitCallback', []);
};

MCordovaWebview.prototype.ExitApp = function() {
    exec(function(){},function(){}, 'MCordovaWebView', 'exitApp', []);
};

MCordovaWebview.prototype.SetWebViewBehavior = function() {
    exec(function(){},function(){}, 'MCordovaWebView', 'webViewAdjustmenBehavior', []);
};


var me = new MCordovaWebview();
module.exports = me;
});

cordova.define("com.mysoft.mwebview.MWebview", function(require, exports, module) {
var exec = require('cordova/exec');

function MWebview() {
  this.callback = null;
  var self = this;
  this.success = function(result) {
    var code = result[0];

    switch (code) {
      //打开webview
      case 1:
        {
          if (self.callback != null && self.callback.onOpen != undefined && self.callback.onOpen != null) {
            self.callback.onOpen();
          }
        }
        break;
        //关闭webview
      case 2:
        {
          if (self.callback != null && self.callback.onClose != undefined && self.callback.onClose != null) {

            var msg = result[1];
            self.callback.onClose(msg);
          }
        }
        break;
      case 3:
        {
          if (self.callback != null && self.callback.actionRefresh != undefined && self.callback.actionRefresh != null) {
              
              self.callback.actionRefresh();
          }
        }
        break;
      case 4:
        {
          if (self.callback != null && self.callback.actionShare != undefined && self.callback.actionShare != null) {
              
              var msg = result[1];
              self.callback.actionShare(msg);
          }
        }
        break;

      default:
        break;
    }
  };
}
MWebview.prototype.open = function(params, callback, fail) {
  this.callback = callback;
  exec(this.success, fail, "MWebview", "open", [params]);
};
MWebview.prototype.openWithAnimation = function(params, callback, fail) {
  this.callback = callback;
  exec(this.success, fail, "MWebview", "openWithAnimation", [params]);
};
MWebview.prototype.getAliPayOrderString = function(params, complete, fail) {
  exec(complete, fail, "MWebview", "getAliPayOrderString", [params]);
};
var me = new MWebview();
module.exports = me;
});

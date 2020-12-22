cordova.define("com.mysoft.msignatureboard.MSignatureBoard", function(require, exports, module) {
var exec = require('cordova/exec');

function MSignatureBoard(){

  // onOpen 1
  // onFinish 2
  // onError 3
  // onClose 4

  this.callback = null;

  var self = this;
  this.success = function(result) {
    var code = result[0];
    switch (code) {
      case 1:
        {
          if (self.callback != null && self.callback.onOpen != undefined && self.callback.onOpen != null) {
            self.callback.onOpen();
          }
        }
        break;
      case 2:
        {
          if (self.callback != null && self.callback.onFinish != undefined && self.callback.onFinish != null) {
            var path = result[1];
            self.callback.onFinish(path);
          }
        }
        break;
           case 3:
        {
          if (self.callback != null && self.callback.onError != undefined && self.callback.onError != null) {
            var error = result[1];
            self.callback.onError(error);
          }
        }
        break;
      case 4:
        {
          if (self.callback != null && self.callback.onClose != undefined && self.callback.onClose != null) {
            self.callback.onClose();
          }
        }
        break;
      default:
        break;
    }

  };
}

// 打开
MSignatureBoard.prototype.open = function(path, callback,options) {

    this.callback = callback;
    var self = this;
    var error = function(obj) {
      self.success([3, obj]);
    };
   if(options == null || options == undefined)
      {
           options = {};
      }
  exec(this.success, error, "MSignatureBoard", "open", [path,options]);
};
               
var me = new MSignatureBoard();
module.exports = me;
});

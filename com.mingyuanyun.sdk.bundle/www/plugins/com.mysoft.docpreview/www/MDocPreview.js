cordova.define("com.mysoft.docpreview.MDocPreview", function(require, exports, module) {
var exec = require('cordova/exec');

function MDocPreview() {
    this.callback = null;
    var self = this;
    this.success = function(result) {
      var code = result[0];
      switch (code) {
        //onOpen
        case 1:
          {
            if (self.callback != null && self.callback.onOpen != undefined && self.callback.onOpen != null) {
              self.callback.onOpen();
            }
          }
          break;
          //onClose
        case 2:
          {
            if (self.callback != null && self.callback.onClose != undefined && self.callback.onClose != null) {
  
              var msg = result[1];
              self.callback.onClose(msg);
            }
          }
          break;
          //onError
        case 3:
          {
            if (self.callback != null && self.callback.onError != undefined && self.callback.onError != null) {
                
                var msg = result[1];
                self.callback.onError(msg);
            }
          }
          break;
        default:
          break;
      }
    };
  }
  MDocPreview.prototype.open = function(path, callback,options) {
    this.callback = callback;
    exec(this.success, null, "MDocPreview", "open", [path,options]);
};

module.exports = new MDocPreview();

});

cordova.define("com.mysoft.mimagebrowser.MImageBrowser", function(require, exports, module) {
var exec = require('cordova/exec');

function MImageBrowser() {
  // onOpen 1
  // onDownloadImage 2
  // onError 3
  // onClose 4
  // onSave 5
  // onExchange 6

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
          if (self.callback != null && self.callback.onDownloadImage != undefined && self.callback.onDownloadImage != null) {
            var info = result[1];
            self.callback.onDownloadImage(info);
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
      case 5:
        {
          if (self.callback != null && self.callback.onSave != undefined && self.callback.onSave != null) {
            self.callback.onSave();
          }
        }
        break;
        case 6:
        {
          if (self.callback != null && self.callback.onExchange != undefined && self.callback.onExchange != null) {
             var info = result[1];
               self.callback.onExchange(info);
          }
        }
        break;
        case 7:
        {
          if (self.callback != null && self.callback.onVideoDownload != undefined && self.callback.onVideoDownload != null) {
             var videoPath = result[1];
               self.callback.onVideoDownload(videoPath);
          }
        }
        break;
      default:
        break;
    }

  };
}

// 打开
MImageBrowser.prototype.open = function(imgUrls, selectIndex, success, fail,options) {

	 if(options == null || options == undefined)
      {
           options = {};
      }
  exec(success, fail, "MImageBrowser", "open", [imgUrls, selectIndex,options]);
};

// 带回调打开
MImageBrowser.prototype.openWithCallback = function(imgUrls, selectedIndex, callback, options) {
  this.callback = callback;
  var self = this;
  var error = function(obj) {
    self.success([3, obj]);
  };
  var params = [imgUrls, selectedIndex];
  if (options != null && options != undefined) {
    params[2] = options;
  }
  exec(this.success, error, "MImageBrowser", "openWithCallback", params);
};

MImageBrowser.prototype.mixOpen = function(mediaObjs, selectedIndex, callback, options) {
  this.callback = callback;
  var self = this;
  var error = function(obj) {
    self.success([3, obj]);
  };
  var params = [mediaObjs, selectedIndex];
  if (options != null && options != undefined) {
    params[2] = options;
  }
  exec(this.success, error, "MImageBrowser", "mixOpen", params);
};
MImageBrowser.prototype.videoSaveComplete = function (mediaObj,success,fail,options){

  if(options == null || options == undefined)
  {
      options = {};
  }
  exec(success, fail, "MImageBrowser", "videoSaveComplete", [mediaObj,options]);

};


var me = new MImageBrowser();
module.exports = me;
});

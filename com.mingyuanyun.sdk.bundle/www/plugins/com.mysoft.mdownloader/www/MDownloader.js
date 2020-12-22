cordova.define("com.mysoft.mdownloader.MDownloader", function(require, exports, module) {
var exec = require('cordova/exec');

function MDownloader() { }

// 下载文件
MDownloader.prototype.downloadFile = function (fileInfos, cb, options) {
  // start 1
  // progress 4
  // finish 2;
  // error 3
  var downloadFileCallback;
  var fail = function (obj) {
    downloadFileCallback([3, {}, obj]);
  };
  downloadFileCallback = function (result) {
    var code = result[0];
    switch (code) {
      case 1:
        {
          if (cb != null && cb.start != undefined && cb.start != null) {
            var obj = result[1];
            cb.start(obj);
          }
        }
        break;
      case 4:
        {
          if (cb != null && cb.progress != undefined && cb.progress != null) {
            var obj = result[1];
            var current = result[2];
            var total = result[3];
            cb.progress(obj, current, total);
          }
        }
        break;
      case 2:
        {
          if (cb != null && cb.finish != undefined && cb.finish != null) {
            cb.finish();
          }
        }
        break;
      case 3:
        {
          if (cb != null && cb.error != undefined && cb.error != null) {
            var errorImgInfo = result[1];
            var errorMsg = result[2];
            cb.error(errorImgInfo, errorMsg);
          }
        }
        break;
      default:
        break;
    }
  };
  exec(downloadFileCallback, fail, "MDownloader", "downloadFile", [fileInfos, options]);
};

MDownloader.prototype.interruptDownload = function (queueId, success, fail) {
  exec(success, fail, "MDownloader", "interruptDownload", [queueId]);
};

// 从服务器下载数据
MDownloader.prototype.downloadData = function (url, databasePath, cb, options) {
  // start 1
  // finish 2;
  // error 3
  var downloadDataCallback;
  var fail = function (obj) {
    downloadDataCallback([3, {}, obj]);
  };
  downloadDataCallback = function (result) {
    var code = result[0];
    switch (code) {
      case 1:
        {
          if (cb != null && cb.start != undefined && cb.start != null) {
            cb.start();
          }
        }
        break;
      case 2:
        {
          if (cb != null && cb.finish != undefined && cb.finish != null) {
            cb.finish();
          }
        }
        break;
      case 3:
        {
          if (cb != null && cb.error != undefined && cb.error != null) {
            var error = result[1];
            cb.error(error);
          }
        }
      default:
        break;
    }
  };
  exec(downloadDataCallback, fail, "MDownloader", "downloadData", [url, databasePath, options]);
};

// 从本地文件下载数据
MDownloader.prototype.downloadDataFromFiles = function (paths, databasePath, cb, options) {
  // start 1
  // finish 2;
  // error 3
  var downloadDataCallback;
  var fail = function (obj) {
    downloadDataCallback([3, {}, obj]);
  };
  downloadDataCallback = function (result) {
    var code = result[0];
    switch (code) {
      case 1:
        {
          if (cb != null && cb.start != undefined && cb.start != null) {
            cb.start();
          }
        }
        break;
      case 2:
        {
          if (cb != null && cb.finish != undefined && cb.finish != null) {
            cb.finish();
          }
        }
        break;
      case 3:
        {
          if (cb != null && cb.error != undefined && cb.error != null) {
            var error = result[1];
            cb.error(error);
          }
        }
      default:
        break;
    }
  };
  exec(downloadDataCallback, fail, "MDownloader", "downloadDataFromFiles", [paths, databasePath, options]);
};

// 后台数据下载
MDownloader.prototype.backgroundDownloadFiles = function (fileInfos, cb, options) {
  // start 1
  // finish 2;
  // error 3
  var downloadFileCallback;
  var fail = function (obj) {

    downloadFileCallback([3, obj]);
  };
  downloadFileCallback = function (result) {
    var code = result[0];
    switch (code) {
      case 1:
        {
          if (cb != null && cb.start != undefined && cb.start != null) {
            cb.start();
          }
        }
        break;
      case 2:
        {
          if (cb != null && cb.finish != undefined && cb.finish != null) {
            cb.finish();
          }
        }
        break;
      case 3:
        {

          if (cb != null && cb.error != undefined && cb.error != null) {

            var obj = result[1];
            var info = obj[0];
            var msg = obj[1];
            cb.error(info, msg);
          }
        }
        break;
      case 4:
        {
          if (cb != null && cb.progress != undefined && cb.progress != null) {
            var obj = result[1];
            var finish = result[2];
            var total = result[3];
            cb.progress(obj, finish, total);
          }
        }
        break;

      case 5:
        {
          if (cb != null && cb.eachProgress != undefined && cb.eachProgress != null) {

            var url = result[1];
            var value = result[2];
            cb.eachProgress(url, value);
          }
        }
        break;
      default:
        break;
    }
  };
  exec(downloadFileCallback, fail, "MDownloader", "backgroundDownloadFiles", [fileInfos, options]);
};
MDownloader.prototype.cancelBgDownload = function (queueIds, success, fail) {
  exec(success, fail, "MDownloader", "cancelBgDownload", [queueIds]);
};
MDownloader.prototype.clearCompatibleCache = function (success) {
  exec(success, null, "MDownloader", "clearCompatibleCache", []);
};

var me = new MDownloader();
module.exports = me;
});

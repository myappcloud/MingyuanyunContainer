cordova.define("com.mysoft.mfilemanager.MFileManager", function(require, exports, module) {
    var exec = require('cordova/exec');

    function MFileManager() {}

    // 文件是否存在
    MFileManager.prototype.exists = function(path, callback) {
        exec(callback, null, "MFileManager", "exists", [path]);
    };

    // 判断是文件夹还是文件
    MFileManager.prototype.type = function(path, success, error) {
        exec(success, error, "MFileManager", "type", [path]);
    };

    // 创建目录
    MFileManager.prototype.mkdirs = function(path, success, error) {
        exec(success, error, "MFileManager", "mkdirs", [path]);
    };

    // 创建文件
    MFileManager.prototype.createFile = function(path, content, success, error) {
        exec(success, error, "MFileManager", "createFile", [path, content]);
    };

    // 读取文件
    MFileManager.prototype.readFile = function(path, success, error) {
        exec(success, error, "MFileManager", "readFile", [path]);
    };
    
    // 拷贝文件
    MFileManager.prototype.copyFile = function(srcPath, dstPath, success, error, del) {
        exec(success, error, "MFileManager", "copyFile", [srcPath, dstPath, del]);
    };

    // 删除文件
    MFileManager.prototype.deleteFile = function(path, success, error) {
        exec(success, error, "MFileManager", "deleteFile", [path]);
    };
    // 压缩文件成zip包
    MFileManager.prototype.zipFile = function(path, files, success, error) {
        exec(success, error, "MFileManager", "zipFile", [path, files]);
    };

    // 解压文件
    MFileManager.prototype.unZipFile = function(srcPath, desPath, cb, error) {

        // start 1
        // progress 2
        // finish 3;

        if (srcPath == null || srcPath == undefined) {

            srcPath = "";
        }
        if (desPath == null || desPath == undefined) {

            desPath = "";
        }
           var unZipCallback = function(result) {
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
                  if (cb != null && cb.progress != undefined && cb.progress != null) {
                    cb.progress(result[1]);
                  }
                }
                break;
                case 3:
                  {
                    if (cb != null && cb.finish != undefined && cb.finish != null) {
                      cb.finish();
                    }
                  }
                  break;
                default:
                  break;
              }
            };
            exec(unZipCallback, error, "MFileManager", "unZipFile", [srcPath, desPath]);
    };

    // 获取文件的md5值
    MFileManager.prototype.md5 = function(path, success, error) {
        exec(success, error, "MFileManager", "md5", [path]);
    };

    // 获取文件的长度 
    MFileManager.prototype.getLength = function(path, success, error) {
        exec(success, error, "MFileManager", "getLength", [path]);
    };

    // 追加内容
    MFileManager.prototype.appendContent = function(path,content, success, error) {
        exec(success, error, "MFileManager", "appendContent", [path,content]);
    };

    // 压缩文件成zip包
    MFileManager.prototype.lzmaFile = function(path, files, success, error) {
        exec(success, error, "MFileManager", "lzmaFile", [path, files]);
    };

    // 解压文件
    MFileManager.prototype.unLzmaFile = function(srcPath, desPath, success, error) {

        if (srcPath == null || srcPath == undefined) {

            srcPath = "";
        }
        if (desPath == null || desPath == undefined) {

            desPath = "";
        }
        exec(success, error, "MFileManager", "unLzmaFile", [srcPath, desPath]);
    };
    //获取文件列表
	MFileManager.prototype.contentsOfDirectory = function(path, success, fail) {
    	exec(success, fail, "MFileManager", "contentsOfDirectory", [path]);
	};
    var me = new MFileManager();
    module.exports = me;

});

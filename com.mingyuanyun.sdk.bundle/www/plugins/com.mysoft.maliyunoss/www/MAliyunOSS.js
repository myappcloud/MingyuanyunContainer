cordova.define("com.mysoft.maliyunoss.MAliyunOSS", function(require, exports, module) {
var exec = require('cordova/exec');

function MAliyunOSS() {

}

MAliyunOSS.prototype.success = function (callback) {
	return function (result) {
		// start 1
		// progress 2
		// finish 3;
		// error 4
		var code = result[0];
		switch (code) {
			case 1: {
				if (callback != null && callback.start != undefined && callback.start != null) {
					callback.start();
				}
			}
			break;
		case 2: {
			if (callback != null && callback.progress != undefined && callback.progress != null) {
				var obj = result[1];
				var current = result[2];
				var total = result[3];
				callback.progress(obj, current, total);
			}
		}
		break;
		case 3: {
			if (callback != null && callback.finish != undefined && callback.finish != null) {
				callback.finish();
			}
		}
		break;
		case 4: {
			if (callback != null && callback.error != undefined && callback.error != null) {
				var objectInfo = result[1];
				var errorMsg = result[2];
				callback.error(objectInfo, errorMsg);
			}
		}
		break;
		default:
			break;
		}
	};
};

// 上传一个或多个文件
MAliyunOSS.prototype.putObjects = function (objects, callback, options) {
	exec(this.success(callback), null, "MAliyunOSS", "putObjects", [objects, options]);
};

// 下载一个或多个文件
MAliyunOSS.prototype.getObjects = function (objects, callback, options) {
	exec(this.success(callback), null, "MAliyunOSS", "getObjects", [objects, options]);
};

// 下载一个文件
MAliyunOSS.prototype.getObject = function (object, callback, options) {
	var _this = this;
	var fail = function (obj) {
		_this.success(callback)([4, {}, obj]);
	};
	exec(this.success(callback), fail, "MAliyunOSS", "getObject", [object, options]);
};

// 上传一个文件
MAliyunOSS.prototype.putObject = function (object, callback, options) {
	var _this = this;
	var fail = function (obj) {
		_this.success(callback)([4, {}, obj]);
	};
	exec(this.success(callback), fail, "MAliyunOSS", "putObject", [object, options]);
};

// 头请求
MAliyunOSS.prototype.headObject = function (object, success, error, options) {
	exec(success, error, "MAliyunOSS", "headObject", [object, options]);
};

var me = new MAliyunOSS();
module.exports = me;
});

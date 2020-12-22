cordova.define("com.mysoft.mutils.MUtils", function(require, exports, module) {
var exec = require('cordova/exec');

function MUtils() {}

//使用浏览器打开网址
MUtils.prototype.openUrlInBrowser = function (url) {
    exec(null, null, "MUtils", "openUrlInBrowser", [url]);
};

//粘贴文本到系统剪贴板
MUtils.prototype.saveTextToClipboard = function (text, success, fail) {
    exec(success, fail, "MUtils", "saveTextToClipboard", [text]);
};
MUtils.prototype.getTextOfClipboard = function (success, fail) {
    exec(success, fail, "MUtils", "getTextOfClipboard", []);
};

// 获取app版本
MUtils.prototype.getAppVersion = function (success, fail) {
    exec(success, fail, "MUtils", "getAppVersion", []);
};

// 获取屏幕分辨率
MUtils.prototype.getDeviceScreenResolution = function (success, fail) {
    exec(success, fail, "MUtils", "getDeviceScreenResolution", []);
};

// aes加密文件
MUtils.prototype.encryptFile = function (srcFile, destFile, success, fail) {
    exec(success, fail, "MUtils", "encryptFile", [srcFile, destFile]);
};

// aes解密文件
MUtils.prototype.decryptFile = function (srcFile, destFile, success, fail) {
    exec(success, fail, "MUtils", "decryptFile", [srcFile, destFile]);
};

// rsa公钥加密字符串
MUtils.prototype.encryptStringWithRSA = function (content, pubKey, success, fail) {
    exec(success, fail, "MUtils", "encryptStringWithRSA", [pubKey, content]);
};

// rsa私钥解密
MUtils.prototype.decryptStringWithRSA = function (content, prikey, success, fail) {
    exec(success, fail, "MUtils", "decryptStringWithRSA", [prikey, content]);
};

// hmac sha256字符摘要
MUtils.prototype.digestStringWithHMACSha256 = function (content, secrect, success, fail) {
    exec(success, fail, "MUtils", "digestStringWithHMACSha256", [secrect, content]);
};

// 获取AppID（iOS对应BundleID，Android对应包名）
MUtils.prototype.getAppID = function (success, fail) {
    exec(success, fail, "MUtils", "getAppID", []);
};

// 获取App在AppStore中的数字Id，只针对iOS有效 option: bundleId, 不传默认为获取本应用的TrackId；
MUtils.prototype.getTrackIdInAppStore = function (success, fail, option) {
    exec(success, fail, "MUtils", "getTrackIdInAppStore", [option]);
};

//获取文件列表
MUtils.prototype.getFileList = function (path, success, fail) {
    exec(success, fail, "MUtils", "getFileList", [path]);
};

//设置android键盘模式,只针对android有效
MUtils.prototype.setKeyboardModel = function (model) {
    exec(null, null, "MUtils", "setKeyboardModel", [model]);
};

//利用第三方服务软件打开pdf,只针对android有效
MUtils.prototype.openPdf = function (path, success, fail) {
    exec(success, fail, "MUtils", "openPdf", [path]);
};

//截屏监听,只针对iOS有效
MUtils.prototype.monitorScreenshot = function (success) {
    exec(success, null, "MUtils", "monitorScreenshot", []);
};

//移除截屏监听,只针对iOS有效
MUtils.prototype.removeMonitorScreenshot = function (success) {
    exec(success, null, "MUtils", "removeMonitorScreenshot", []);
};

//屏幕截屏
MUtils.prototype.screenshot = function (path, success, fail, option) {
    exec(success, fail, "MUtils", "screenshot", [path, option]);
};

//跳转系统权限控制页面（只针对iOS有效）
MUtils.prototype.openPrefsSettings = function (success, fail) {
    exec(success, fail, "MUtils", "openPrefsSettings", []);
};

//跳转系统单个权限控制页面（只针对iOS有效）
MUtils.prototype.openSinglePrefsSetting = function (path, success, fail) {
    exec(success, fail, "MUtils", "openSinglePrefsSetting", [path]);
};


//base64字符串转图片
MUtils.prototype.imageWithBase64String = function (content, path, success, fail) {

    if (content == null || content == undefined) {

        content = "";
    }
    if (path == null || path == undefined) {

        path = "";
    }
    exec(success, fail, "MUtils", "imageWithBase64String", [content, path]);
};


//计步数查询
MUtils.prototype.queryStepCount = function (startDate, endDate, success, fail) {

    exec(success, fail, "MUtils", "queryStepCount", [startDate, endDate]);
};


//获取存储空间大小
MUtils.prototype.getStorageSize = function (success, fail) {
    exec(success, fail, "MUtils", "getStorageSize", []);
};

// 是否支持实时计步,仅限android
MUtils.prototype.isSupportedRealStep = function (success, fail) {
    exec(success, fail, "MUtils", "isSupportedRealStep", []);
};

// 开启实时计步,仅限android
MUtils.prototype.startRealStep = function (success, fail, options) {
    exec(success, fail, "MUtils", "startRealStep", [options]);
};

// 停止实时计步,仅限android
MUtils.prototype.stopRealStep = function (success, fail) {
    exec(success, fail, "MUtils", "stopRealStep", []);
};

//获取实时计步数,仅限android
MUtils.prototype.getRealStepCount = function (success, fail) {
    exec(success, fail, "MUtils", "getRealStepCount", []);
};

//保存网络图片到系统相册
MUtils.prototype.savePicToAlbum = function (url, success, fail) {
    exec(success, fail, "MUtils", "savePicToAlbum", [url]);
};

//开启摇动以撤销属性
MUtils.prototype.enableIOSShakeToUndo = function (enable, success, fail) {
    exec(success, fail, "MUtils", "enableIOSShakeToUndo", [enable]);
};
MUtils.prototype.installApp = function (path, success, fail) {
    exec(success, fail, "MUtils", "installApp", [path]);
};
MUtils.prototype.startPing = function (host, success, fail, num) {

    if (num == null || num == undefined) {

        num = 4;
    }
    exec(success, fail, "MUtils", "startPing", [host, num]);
};
MUtils.prototype.clearWebViewCache = function (success, fail) {
    exec(success, fail, "MUtils", "clearWebViewCache", []);
};
//设置状态栏文字
MUtils.prototype.setStatusBarText = function (params, success, fail) {
    exec(success, fail, "MUtils", "setStatusBarText", [params]);
};
//清除状态栏文字
MUtils.prototype.clearStatusBarText = function (success, fail) {
    exec(success, fail, "MUtils", "clearStatusBarText", []);
};

MUtils.prototype.roateImg = function (sourcePath, roatePath, success, fail, roateAngle) {
    exec(success, fail, "MUtils", "roateImg", [sourcePath, roatePath, roateAngle]);
};
MUtils.prototype.saveVideoToPhotosAlbum = function (path, success, fail) {
    exec(success, fail, "MUtils", "saveVideoToPhotosAlbum", [path]);
};
MUtils.prototype.appScore = function (appid, success, error) {
    exec(success, error, "MUtils", "appScore", [appid]);
};
MUtils.prototype.appStore = function (appid, success, error, options) {
    exec(success, error, "MUtils", "appStore", [appid, options]);
};
MUtils.prototype.appStoreScore = function (appid, success, error) {
    exec(success, error, "MUtils", "appStoreScore", [appid]);
};
MUtils.prototype.checkPermission = function (permission, success, error, options) {
    exec(success, error, "MUtils", "checkPermission", [permission, options]);
};
MUtils.prototype.getBatteryLevel = function (success, error) {
    exec(success, error, "MUtils", "getBatteryLevel", []);

};
MUtils.prototype.updateOfHomeIndicatorHidden = function (status, success, error) {
    exec(success, error, "MUtils", "updateOfHomeIndicatorHidden", [status]);

};
MUtils.prototype.sendLocalNotification = function (params, success, error) {
    exec(success, error, "MUtils", "sendLocalNotification", [params]);

};
MUtils.prototype.removeLocalNotification = function (id, success, error) {
    exec(success, error, "MUtils", "removeLocalNotification", [id]);

};
MUtils.prototype.toast = function (txt, success, error) {
    exec(success, error, "MUtils", "toast", [txt]);

};
MUtils.prototype.imageToBase64String = function (path, success, error) {
    exec(success, error, "MUtils", "imageToBase64String", [path]);

};

//仅支持安卓
MUtils.prototype.goHome = function (success, error) {
    exec(success, error, "MUtils", "goHome", []);
};

MUtils.prototype.setCookiesEnabled = function (enable, success, error) {
    exec(success, error, "MUtils", "setCookiesEnabled", [enable]);
};

MUtils.prototype.setCookie = function (url, value, success, error) {
    exec(success, error, "MUtils", "setCookie", [url, value]);
};

MUtils.prototype.getCookie = function (url, success, error) {
    exec(success, error, "MUtils", "getCookie", [url]);
};

MUtils.prototype.clearCookies = function (success, error) {
    exec(success, error, "MUtils", "clearCookies", []);
};
MUtils.prototype.isBluetoothEnable = function (success, error) {
    exec(success, error, "MUtils", "isBluetoothEnable", []);
};
MUtils.prototype.getLocation = function (success, error) {
    exec(success, error, "MUtils", "getLocation", []);
};
MUtils.prototype.getChannel = function (success, error) {
    exec(success, error, "MUtils", "getChannel", []);
};
MUtils.prototype.getDeviceInfo = function (success, error) {
    exec(success, error, "MUtils", "getDeviceInfo", []);
};

MUtils.prototype.getCallLogInfo = function (phones, success, error, limit) {
    exec(success, error, "MUtils", "getCallLogInfo", [phones, limit]);
};
MUtils.prototype.unableMoveUpAfterKeyboardAppear = function (state) {
    exec(null, null, "MUtils", "unableMoveUpAfterKeyboardAppear", [state]);
};
MUtils.prototype.setDeviceOrientation = function (orientation, success, fail) {
    exec(success, fail, "MUtils", "setDeviceOrientation", [orientation]);
};
MUtils.prototype.isWifiEnabled = function (callback) {
    exec(callback, null, "MUtils", "isWifiEnabled", []);
};
MUtils.prototype.toWifiSetting = function (success, fail) {
    exec(success, fail, "MUtils", "toWifiSetting", []);
};

MUtils.prototype.isDarkMode = function (success, fail) {
    exec(success, fail, "MUtils", "isDarkMode", []);
};

MUtils.prototype.toWhiteListSetting = function (success, fail) {
    exec(success, fail, "MUtils", "toWhiteListSetting", []);
};

MUtils.prototype.addScheduleEvent = function (object,success, fail) {
    exec(success, fail, "MUtils", "addScheduleEvent", [object]);
};

MUtils.prototype.removeScheduleEvent = function (object,success, fail) {
    exec(success, fail, "MUtils", "removeScheduleEvent", [object]);
};

var me = new MUtils();
module.exports = me;

});

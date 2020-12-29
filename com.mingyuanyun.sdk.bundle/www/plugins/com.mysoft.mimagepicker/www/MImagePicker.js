cordova.define("com.mysoft.mimagepicker.MImagePicker", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
    openCamera: function (path, success, error, options) {
        exec(success, error, 'MImagePicker', 'openCamera', [path, options]);
    },
    openAlbum: function (path, success, error, options) {
        exec(success, error, 'MImagePicker', 'openAlbum', [path, options]);
    },
    imageProcess: function (path, success, error, options) {
        exec(success, error, 'MImagePicker', 'imageProcess', [path, options]);
    },
    videoProcess: function (path, success, error, options) {
        exec(success, error, 'MImagePicker', 'videoProcess', [path, options]);
    },
    editImage: function (pathGroups, success, error, options) {
        exec(success, error, 'MImagePicker', 'editImage', [pathGroups, options]);
    },
    getImageInfo: function (path, success, error) {
        exec(success, error, 'MImagePicker', 'getImageInfo', [path]);
    },
    getVideoInfo: function (path, success, error, options) {
        exec(success, error, 'MImagePicker', 'getVideoInfo', [path, options]);
    },
    saveToAlbum:function (path, success, error, group) {
        exec(success, error, 'MImagePicker', 'saveToAlbum', [path, group]);
    }
}
});

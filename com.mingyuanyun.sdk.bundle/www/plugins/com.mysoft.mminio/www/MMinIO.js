cordova.define("com.mysoft.mminio.MMinIO", function(require, exports, module) {
var exec = require('cordova/exec');

function MMinIO() {

}

MMinIO.prototype.success = function (callback) {
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
                    callback.progress(result[1], result[2], result[3], result[4]);
                }
            }
                break;
            case 3: {
                if (callback != null && callback.finish != undefined && callback.finish != null) {
                    callback.finish(result[1], result[2]);
                }
            }
                break;
            case 4: {
                if (callback != null && callback.error != undefined && callback.error != null) {
                    callback.error(result[1], result[2]);
                }
            }
                break;
            default:
                break;
        }
    };
};

MMinIO.prototype.putObjects = function (objects, callback, options) {
    exec(this.success(callback), null, "MMinIO", "putObjects", [objects, options]);
};

MMinIO.prototype.getObjects = function (objects, callback, options) {
    exec(this.success(callback), null, "MMinIO", "getObjects", [objects, options]);
};

MMinIO.prototype.putObject = function (objects, callback, options) {
    exec(this.success(callback), null, "MMinIO", "putObject", [objects, options]);
};

MMinIO.prototype.getObject = function (objects, callback, options) {
    exec(this.success(callback), null, "MMinIO", "getObject", [objects, options]);
};

MMinIO.prototype.headObject = function (object, success, error, options) {
    exec(success, error, "MMinIO", "headObject", [object, options]);
};

var me = new MMinIO();
module.exports = me;

});

cordova.define("com.mysoft.miflyspeech.MIFlySpeech", function(require, exports, module) {
var exec = require('cordova/exec');

exports.startRecognition = function (callback, options) {
    var mycb = function (result) {
        var code = result[0];
        var data = result[1];
        switch (code) {
            case 1:
                if (callback != null && callback.start != undefined && callback.start != null) {
                    callback.start();
                }
                break;
            case 2:
                if (callback != null && callback.end != undefined && callback.end != null) {
                    callback.end(data);
                }
                break;
            case 3:
                if (callback != null && callback.error != undefined && callback.error != null) {
                    callback.error(data);
                }
                break;
            case 4:
                if (callback != null && callback.changed != undefined && callback.changed != null) {
                    callback.changed(data);
                }
                break;
            case 5:
                if (callback != null && callback.voiceVolume != undefined && callback.voiceVolume != null) {
                    callback.voiceVolume(data);
                }
                break;
            default:
                break;
        }
    };
    exec(
        mycb,
        function (error) {
            mycb([3, error]);
        },
        "MIFlySpeech",
        "startRecognition",
        [options]
    );

};

exports.stopRecognition = function () {
    exec(null, null, 'MIFlySpeech', 'stopRecognition', []);
};
});

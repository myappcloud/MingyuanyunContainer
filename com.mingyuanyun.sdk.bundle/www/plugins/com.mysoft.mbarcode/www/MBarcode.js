cordova.define("com.mysoft.mbarcode.MBarcode", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
    scanQRCode: function (callback, options) {
        var success = function (result) {
            if (callback == undefined) return;
            var funName, args;
            if (Array.isArray(result)) {
                funName = result[0];
                args = result.slice(1);
            } else {
                console.log('返回结果必须为数组');
            }
            try {
                var params = "";
                args.forEach(function (_, index) {
                    params += 'args[' + index + ']';
                    if (index != args.length - 1) {
                        params += ',';
                    }
                });
                eval('callback.' + funName + '(' + params + ')');
            } catch (e) {
                console.log(e);
            }
        }
        exec(success, null, 'MBarcode', 'scanQRCode', [options]);
    },
    generateQRCode: function (content, generatePath, success, fail, options) {
        exec(success, fail, 'MBarcode', 'generateQRCode', [content, generatePath, options]);
    }
}
});

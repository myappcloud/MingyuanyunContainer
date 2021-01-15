cordova.define("com.mysoft.hikvision.MHikvision", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
    open: function (params, callback) {
        if (callback == null) {
            console.log('callback must not be null');
            return;
        }
        exec(
            function (result) {
                var code = result[0];
                switch (code) {
                    case 1:
                        if (callback.onOpen != undefined && callback.onOpen != null) {
                            callback.onOpen();
                        }
                        break;
                    case 2:
                        if (callback.onClose != undefined && callback.onClose != null) {
                            callback.onClose(result[1]);
                        }
                        break;
                };
            },
            function (error) {
                if (callback.onError != undefined && callback.onError != null) {
                    callback.onError(error);
                }
            },
            'MHikvision',
            'open',
            [params]
        );
    }
}
});

cordova.define("com.mysoft.mmkv.MMKV", function(require, exports, module) {
function MMKVFactory(mmkvId) {
    var self = this;
    self.mmkvId = mmkvId;
    self.isOpen = false;

    self.mmkvWithID = function (success, error) {
        cordova.exec(function () {
            self.isOpen = true;
            success();
        }, error, "MMKV", "mmkvWithID", [self.mmkvId]);
    }

    function checkString(str, name) {
        if (typeof str != 'string') {
            throw name + ' must be a string';
        }
    }

    function checkOpen() {
        if (!self.isOpen) {
            throw "Can't call any method :MMKV is not init";
        }
    }

    self.setValue = function (key, value, success, error) {
        checkOpen();
        checkString(key, 'key');
        checkString(value, 'value');
        cordova.exec(success, error, "MMKV", "setValue", [self.mmkvId, key, value]);
    }

    self.getValueForKey = function (key, success, error) {
        checkOpen();
        checkString(key, 'key');
        cordova.exec(success, error, "MMKV", "getValueForKey", [self.mmkvId, key]);
    }

    self.removeValueForKey = function (key, success, error) {
        checkOpen();
        checkString(key, 'key');
        cordova.exec(success, error, "MMKV", "removeValueForKey", [self.mmkvId, key]);
    }

    self.removeValuesForKeys = function (keys, success, error) {
        checkOpen();
        if (!(keys instanceof Array)) {
            throw 'keys must be a Array';
        }
        cordova.exec(success, error, "MMKV", "removeValuesForKeys", [self.mmkvId, keys]);
    }

    self.enumerateAll = function (success, error) {
        checkOpen();
        cordova.exec(success, error, "MMKV", "enumerateAll", [self.mmkvId]);
    }

    self.clearAll = function (success, error) {
        checkOpen();
        cordova.exec(success, error, "MMKV", "clearAll", [self.mmkvId]);
    }

    self.close = function (success, error) {
        checkOpen();
        cordova.exec(function () {
            self.isOpen = false;
            success();
        }, error, "MMKV", "close", [self.mmkvId]);
    }
}

window.MMKV = {
    mmkvWithID: function (success, error, mmkvId) {
        if (mmkvId != undefined && typeof mmkvId != 'string') {
            throw 'mmkvId must be a string';
        }
        var mmkv = new MMKVFactory(mmkvId);
        mmkv.mmkvWithID(success, error);
        return mmkv;
    }
}
});

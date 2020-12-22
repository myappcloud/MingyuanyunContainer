cordova.define("com.mysoft.mfileexplorer.MFileExplorer", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
      chooseFile: function (success, error) {
            exec(success, error, 'MFileExplorer', 'chooseFile', []);
      },
}
});

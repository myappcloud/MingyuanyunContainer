cordova.define("com.mysoft.mdownloader.MUploader", function(require, exports, module) {
    var exec = require('cordova/exec');

    function MUploader() {}

    // 上传文件
    MUploader.prototype.uploadFile = function(fileInfos, cb, options) {
        // start 1
        // progress 4
        // finish 2;
        // error 3
        var uploadFileCallback;
        var fail = function(obj) {
            uploadFileCallback([3, {}, obj]);
        };
        uploadFileCallback = function(result) {
            var code = result[0];
            switch (code) {
                case 1:
                    {
                       if (cb != null && cb.start != undefined && cb.start != null) {
                            var obj = result[1];
                            cb.start(obj);
                        }
                    }
                    break;
                case 4:
                    {
                        if (cb != null && cb.progress != undefined && cb.progress != null) {
                            var obj = result[1];
                            var current = result[2];
                            var total = result[3];
                            cb.progress(obj, current, total);
                        }
                    }
                    break;
                case 2:
                    {
                        if (cb != null && cb.finish != undefined && cb.finish != null) {
                            cb.finish();
                        }
                    }
                    break;
                case 3:
                    {
                        if (cb != null && cb.error != undefined && cb.error != null) {
                            var errorImgInfo = result[1];
                            var errorMsg = result[2];
                            cb.error(errorImgInfo, errorMsg);
                        }
                    }
                    break;
                     case 5:
                    {
                         if (cb != null && cb.eachProgress != undefined && cb.eachProgress != null) {
               
                            var url = result[1];
                            var value = result[2];
                            cb.eachProgress(url,value);
                        }   
                    }
               break;
                default:
                    break;
            }
        };
        exec(uploadFileCallback, fail, "MUploader", "uploadFile", [fileInfos, options]);
    };
    MUploader.prototype.interruptUpload = function(queueId, success, fail) {
       exec(success, fail, "MUploader", "interruptUpload", [queueId]);
    };
    // MUploader.prototype.backgroundUploadFiles = function(fileInfos, cb, options) {
    //     // start 1
    //     // progress 4
    //     // finish 2;
    //     // error 3
    //     var uploadFileCallback;
    //     var fail = function(obj) {
    //         uploadFileCallback([3, {}, obj]);
    //     };
    //     uploadFileCallback = function(result) {
    //         var code = result[0];
    //         switch (code) {
    //             case 1:
    //                 {
    //                     if (cb != null && cb.start != undefined && cb.start != null) {
    //                         cb.start();
    //                     }
    //                 }
    //                 break;
    //             case 4:
    //                 {
    //                     if (cb != null && cb.progress != undefined && cb.progress != null) {
    //                         var obj = result[1];
    //                         var current = result[2];
    //                         var total = result[3];
    //                         cb.progress(obj, current, total);
    //                     }
    //                 }
    //                 break;
    //             case 2:
    //                 {
    //                     if (cb != null && cb.finish != undefined && cb.finish != null) {
    //                         cb.finish();
    //                     }
    //                 }
    //                 break;
    //             case 3:
    //                 {
    //                     if (cb != null && cb.error != undefined && cb.error != null) {
    //                         var errorImgInfo = result[1];
    //                         var errorMsg = result[2];
    //                         cb.error(errorImgInfo, errorMsg);
    //                     }
    //                 }
    //                 break;

               //  case 5:
               //      {
               //           if (cb != null && cb.eachProgress != undefined && cb.eachProgress != null) {
               
               //              var url = result[1];
               //              var value = result[2];
               //              cb.eachProgress(url,value);
               //          }   
               //      }
               // break;
    //             default:
    //                 break;
    //         }
    //     };
    //     exec(uploadFileCallback, fail, "MUploader", "backgroundUploadFiles", [fileInfos, options]);
    // };


    var me = new MUploader();
    module.exports = me;

});

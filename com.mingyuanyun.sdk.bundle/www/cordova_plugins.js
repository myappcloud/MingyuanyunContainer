cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.mysoft.core.MicCore",
      "file": "plugins/com.mysoft.core/www/MicCore.js",
      "pluginId": "com.mysoft.core",
      "clobbers": [
        "MicCore"
      ]
    },
    {
      "id": "com.mysoft.core.MHotUpdate",
      "file": "plugins/com.mysoft.core/www/MHotUpdate.js",
      "pluginId": "com.mysoft.core",
      "clobbers": [
        "MHotUpdate"
      ]
    },
    {
      "id": "com.mysoft.core.keyboard",
      "file": "plugins/com.mysoft.core/www/ios/keyboard.js",
      "pluginId": "com.mysoft.core",
      "clobbers": [
        "cordova.plugins.Keyboard"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.iosFileSystem",
      "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "com.mysoft.msdkassistant.MSdkAssistant",
      "file": "plugins/com.mysoft.msdkassistant/www/MSdkAssistant.js",
      "pluginId": "com.mysoft.msdkassistant",
      "clobbers": [
        "MSdkAssistant"
      ]
    },
    {
      "id": "com.mysoft.maliyunoss.MAliyunOSS",
      "file": "plugins/com.mysoft.maliyunoss/www/MAliyunOSS.js",
      "pluginId": "com.mysoft.maliyunoss",
      "clobbers": [
        "MAliyunOSS"
      ]
    },
    {
      "id": "com.mysoft.mminio.MMinIO",
      "file": "plugins/com.mysoft.mminio/www/MMinIO.js",
      "pluginId": "com.mysoft.mminio",
      "clobbers": [
        "MMinIO"
      ]
    },
    {
      "id": "com.mysoft.wkwebview.ios-wkwebview-exec",
      "file": "plugins/com.mysoft.wkwebview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "com.mysoft.wkwebview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-keyboard.keyboardext",
      "file": "plugins/cordova-plugin-keyboard/www/keyboardext.js",
      "pluginId": "cordova-plugin-keyboard",
      "clobbers": [
        "window.KeyboardExt"
      ]
    },
    {
      "id": "com.mysoft.hikvision.MHikvision",
      "file": "plugins/com.mysoft.hikvision/www/mhikvision.js",
      "pluginId": "com.mysoft.hikvision",
      "clobbers": [
        "MHikvision"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "com.mysoft.mstatusbar.statusbar",
      "file": "plugins/com.mysoft.mstatusbar/www/statusbar.js",
      "pluginId": "com.mysoft.mstatusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "com.mysoft.maccelerometer.MAccelerometer",
      "file": "plugins/com.mysoft.maccelerometer/www/MAccelerometer.js",
      "pluginId": "com.mysoft.maccelerometer",
      "clobbers": [
        "MAccelerometer"
      ]
    },
    {
      "id": "com.mysoft.mimagepicker.MImagePicker",
      "file": "plugins/com.mysoft.mimagepicker/www/MImagePicker.js",
      "pluginId": "com.mysoft.mimagepicker",
      "clobbers": [
        "MImagePicker"
      ]
    },
    {
      "id": "com.mysoft.mfilemanager.MFileManager",
      "file": "plugins/com.mysoft.mfilemanager/www/MFileManager.js",
      "pluginId": "com.mysoft.mfilemanager",
      "clobbers": [
        "MFileManager"
      ]
    },
    {
      "id": "com.mysoft.mutils.MUtils",
      "file": "plugins/com.mysoft.mutils/www/MUtils.js",
      "pluginId": "com.mysoft.mutils",
      "clobbers": [
        "MUtils"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "com.mysoft.mcordovawebview.MCordovaWebview",
      "file": "plugins/com.mysoft.mcordovawebview/www/MCordovaWebView.js",
      "pluginId": "com.mysoft.mcordovawebview",
      "merges": [
        "MCordovaWebView"
      ]
    },
    {
      "id": "com.mysoft.mimagebrowser.MImageBrowser",
      "file": "plugins/com.mysoft.mimagebrowser/www/MImageBrowser.js",
      "pluginId": "com.mysoft.mimagebrowser",
      "clobbers": [
        "MImageBrowser"
      ]
    },
    {
      "id": "com.mysoft.sqliteplus.SQLitePlugin",
      "file": "plugins/com.mysoft.sqliteplus/www/SQLitePlugin.js",
      "pluginId": "com.mysoft.sqliteplus",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "com.mysoft.mfileexplorer.MFileExplorer",
      "file": "plugins/com.mysoft.mfileexplorer/www/MFileExplorer.js",
      "pluginId": "com.mysoft.mfileexplorer",
      "clobbers": [
        "MFileExplorer"
      ]
    },
    {
      "id": "com.mysoft.mmkv.MMKV",
      "file": "plugins/com.mysoft.mmkv/www/mmkv.js",
      "pluginId": "com.mysoft.mmkv",
      "runs": true
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "com.mysoft.mdownloader.MDownloader",
      "file": "plugins/com.mysoft.mdownloader/www/MDownloader.js",
      "pluginId": "com.mysoft.mdownloader",
      "clobbers": [
        "MDownloader"
      ]
    },
    {
      "id": "com.mysoft.mdownloader.MUploader",
      "file": "plugins/com.mysoft.mdownloader/www/MUploader.js",
      "pluginId": "com.mysoft.mdownloader",
      "clobbers": [
        "MUploader"
      ]
    },
    {
      "id": "com.mysoft.docpreview.MDocPreview",
      "file": "plugins/com.mysoft.docpreview/www/MDocPreview.js",
      "pluginId": "com.mysoft.docpreview",
      "clobbers": [
        "MDocPreview"
      ]
    },
    {
      "id": "com.mysoft.mbarcode.MBarcode",
      "file": "plugins/com.mysoft.mbarcode/www/MBarcode.js",
      "pluginId": "com.mysoft.mbarcode",
      "clobbers": [
        "MBarcode"
      ]
    },
    {
      "id": "com.mysoft.msignatureboard.MSignatureBoard",
      "file": "plugins/com.mysoft.msignatureboard/www/msignatureboard.js",
      "pluginId": "com.mysoft.msignatureboard",
      "clobbers": [
        "MSignatureBoard"
      ]
    },
    {
      "id": "com.mysoft.mwebview.MWebview",
      "file": "plugins/com.mysoft.mwebview/www/MWebview.js",
      "pluginId": "com.mysoft.mwebview",
      "clobbers": [
        "MWebview"
      ]
    },
    {
      "id": "com.mysoft.miflyspeech.MIFlySpeech",
      "file": "plugins/com.mysoft.miflyspeech/www/MIFlySpeech.js",
      "pluginId": "com.mysoft.miflyspeech",
      "clobbers": [
        "MIFlySpeech"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransferError",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransferError"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransfer",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransfer"
      ]
    },
    {
      "id": "com.mysoft.mlogcollection.MLogCollection",
      "file": "plugins/com.mysoft.mlogcollection/www/MLogCollection.js",
      "pluginId": "com.mysoft.mlogcollection",
      "clobbers": [
        "MLogCollection"
      ]
    }
  ];
  module.exports.metadata = {
    "com.mysoft.mcordovaconfig": "1.0.0",
    "com.mysoft.core": "3.2.6",
    "cordova-plugin-file": "6.0.2",
    "com.mysoft.msdkassistant": "1.0.3",
    "com.mysoft.maliyunoss": "1.4.4",
    "com.mysoft.mminio": "1.1.1",
    "com.mysoft.wkwebview": "1.3.7",
    "cordova-plugin-keyboard": "1.1.0",
    "com.mysoft.hikvision": "1.0.4",
    "cordova-plugin-network-information": "2.0.1",
    "com.mysoft.mstatusbar": "2.3.1",
    "com.mysoft.maccelerometer": "1.0.2",
    "com.mysoft.mimagepicker": "1.4.9",
    "com.mysoft.mfilemanager": "1.4.4",
    "com.mysoft.mutils": "1.8.2",
    "cordova-plugin-device": "2.0.3",
    "com.mysoft.mcordovawebview": "2.4.9",
    "com.mysoft.mimagebrowser": "1.5.4",
    "com.mysoft.sqliteplus": "1.3.1",
    "com.mysoft.mfileexplorer": "1.0.6",
    "com.mysoft.mmkv": "1.0.5",
    "cordova-plugin-dialogs": "2.0.1",
    "com.mysoft.mdownloader": "1.5.4",
    "com.mysoft.docpreview": "1.1.2",
    "com.mysoft.mbarcode": "1.2.6",
    "com.mysoft.msignatureboard": "1.0.8",
    "com.mysoft.mwebview": "1.6.8",
    "com.mysoft.miflyspeech": "1.0.5",
    "cordova-plugin-file-transfer": "1.7.1",
    "com.mysoft.mlogcollection": "1.1.9"
  };
});
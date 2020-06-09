cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "chinthan-plugin-texttospeechplugin.TextToSpeechPlugin",
      "file": "plugins/chinthan-plugin-texttospeechplugin/www/TextToSpeechPlugin.js",
      "pluginId": "chinthan-plugin-texttospeechplugin",
      "clobbers": [
        "cordova.plugins.TextToSpeechPlugin"
      ]
    },
    {
      "id": "chinthan-plugin-speechtotextplugin.SpeechToTextPlugin",
      "file": "plugins/chinthan-plugin-speechtotextplugin/www/SpeechToTextPlugin.js",
      "pluginId": "chinthan-plugin-speechtotextplugin",
      "clobbers": [
        "cordova.plugins.SpeechToTextPlugin"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "chinthan-plugin-texttospeechplugin": "0.0.1",
    "chinthan-plugin-speechtotextplugin": "0.0.1",
    "cordova-plugin-device": "2.0.4-dev"
  };
});
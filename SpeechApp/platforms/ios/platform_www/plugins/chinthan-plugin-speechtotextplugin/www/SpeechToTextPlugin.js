cordova.define("chinthan-plugin-speechtotextplugin.SpeechToTextPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
  isRecognitionAvailable: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'isRecognitionAvailable', []);
  },
  startListening: function(successCallback, errorCallback, options) {
    options = options || {};
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'startListening', [ options.language, options.matches, options.prompt, options.showPartial, options.showPopup ]);
  },
  stopListening: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'stopListening', []);
  },
  getSupportedLanguages: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'getSupportedLanguages', []);
  },
  hasPermission: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'hasPermission', []);
  },
  requestPermission: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'SpeechToTextPlugin', 'requestPermission', []);
  }
};

});

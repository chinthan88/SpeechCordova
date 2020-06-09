var cordovaFunction = {

	startTextToSpeech:function(dataToSend, callback, errorFunction){
		this.offlineSurveyFunction(dataToSend, callback, errorFunction,
				"TextToSpeechPlugin", "startTextToSpeech");
	}
	
};

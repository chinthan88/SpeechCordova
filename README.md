# SpeechCordova
Speech Cordova Sample App

This sample app is having 2 screens

1. Text to Speech Screen
2. Speech to Text Screen

## Plugin Installation

Download/Clone this project and build to run this app.


## Plugin Usage

### 1. Text to Speech Plugin

```
TextToSpeechPlugin.speak({
	text: "Welcome to iOS App",
	locale: "en-US",
	rate: 1
}).then(function () {

}, function (reason) {
	alert(reason);
})

```

### 2. Speech to Text Plugin - Start Listening

```
SpeechToTextPlugin.startListening(function (result) {
	alert(result);
}, function (error) {
	alert(error);
}, {
	language: "en-US",
	matches: 1,
	showPartial: true
});
}

```

### 3. Speech to Text Plugin - Stop Listening

```
SpeechToTextPlugin.stopListening(function (result) {

}, function (error) {
	alert('error');
});

}

```

### 4. Speech to Text Plugin - Has Audio Permission

```
SpeechToTextPlugin.hasPermission(function(result) {
}
```

### 5. Speech to Text Plugin - Request Audio Permission

```
SpeechToTextPlugin.requestPermission(function (result) {

}, function (error) {
	alert(error);
});
```

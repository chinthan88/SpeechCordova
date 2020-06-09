/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
            var switchStatus = false;
           var switchStatusSST = false;

           var englishText = "We have to make a Cordova plugin that will work on Cordova Apps for Android & iOS. Both English and Hindi conversion should work.Expected result would be a Cordova App with the demo of the above plugin functionality.";
           var hindiText = "कम्प्यूटर आधुनिक तकनीक की एक महान खोज है। ये एक सामान्य मशीन है जो अपनी मेमोरी में ढेर सारे डाटा को सुरक्षित रखने की क्षमता रखती है ये इनपुट और आउटपुट(प्रिंटर) के इस्तेमाल से काम करता है";
           var locale = "en-US"
           var localeSST = "en-US"

           var textAreaText = "";
           if(switchStatus == false) {
               textAreaText = englishText;
           }
            else {
                textAreaText = hindiText;
            }
           document.getElementById("TTSArea").innerHTML = textAreaText;
           
           $("#togBtn").on('change', function() {
                   if ($(this).is(':checked')) {
                       switchStatus = $(this).is(':checked');
                       document.getElementById("TTSArea").innerHTML = hindiText;
                       locale = "hi-IN"
                   }
                   else {
                      switchStatus = $(this).is(':checked');
                      document.getElementById("TTSArea").innerHTML = englishText;
                      locale = "en-US"
                   }
               });
           
           $("#togBtnSTT").on('change', function() {
                     if ($(this).is(':checked')) {
                         switchStatusSST = $(this).is(':checked');
                         localeSST = "hi-IN"
                     }
                     else {
                        switchStatus = $(this).is(':checked');
                        localeSST = "en-US"
                     }
                 });


       

       function startTextToSpeech() {
       var model = device.model;
       var textValue = document.getElementById("TTSArea").value;

      TextToSpeechPlugin.speak({
          text: textValue,
          locale: locale,
          rate: 1
      }).then(function () {
        }, function (reason) {
            alert(reason);
        });
       
        }
       
       function startSpeechToText() {
           SpeechToTextPlugin.hasPermission(function(result) {
               if(result) {
                   SpeechToTextPlugin.startListening(function(result) {

                       document.getElementById("SSTArea").innerHTML = result;

                   }, function(error) {
                       alert('error');
                   },{
                       language: localeSST,
                       matches: 1,
                       showPartial: true
                   });
               }
               else {
                   SpeechToTextPlugin.requestPermission(function(result) {
                       alert('result');

                   }, function(error) {
                       alert('error');
                   });
               }
           }, function(error) {
               alert('error');
           });
         
          }
       
       function stopSpeech() {

        SpeechToTextPlugin.stopListening(function(result) {

        }, function(error) {
            alert('error');
        });
         
          }


       

       function ButtonClick() {
           var btn = document.getElementById("speechBtn");
           if (btn.value == "Start") {
               btn.value = "Stop";
               btn.innerHTML = "Stop";
               btn.style.backgroundColor = "#D84315"
               startSpeechToText()
           }
           else {
               btn.value = "Start";
               btn.innerHTML = "Start";
               btn.style.backgroundColor = "#004D40"
               stopSpeech();
           }
       }

  
  // Get the element with id="defaultOpen" and click on it
  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();

SpeechToTextPlugin.requestPermission(function(result) {
    alert('result');

}, function(error) {
    alert('error');
});



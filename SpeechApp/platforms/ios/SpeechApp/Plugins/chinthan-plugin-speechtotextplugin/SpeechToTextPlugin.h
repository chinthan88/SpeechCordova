//
//  SpeechToTextPlugin.h
//  SpeechApp
//
//  Created by Chinthan on 06/06/20.
//  Copyright © 2020 Chinthan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Cordova/CDV.h>

@interface SpeechToTextPlugin : CDVPlugin

- (void)isRecognitionAvailable:(CDVInvokedUrlCommand*)command;
- (void)startListening:(CDVInvokedUrlCommand*)command;
- (void)stopListening:(CDVInvokedUrlCommand*)command;
- (void)getSupportedLanguages:(CDVInvokedUrlCommand*)command;
- (void)hasPermission:(CDVInvokedUrlCommand*)command;
- (void)requestPermission:(CDVInvokedUrlCommand*)command;

@end

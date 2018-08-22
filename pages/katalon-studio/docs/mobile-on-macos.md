---
title: "Mobile on macOS" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-on-macos.html 
description: 
---
Katalon Studio Supported Environment on macOS
---------------------------------------------

<table class="relative-table wrapped confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 37.4702%;"><col style="width: 62.5298%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh" style="text-align: center;">&nbsp;</th><th class="xtd-0-1 confluenceTh" colspan="1" style="text-align: center;">Version</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" style="text-align: center;">Appium</td><td class="xtd-1-1 confluenceTd" colspan="1" style="text-align: center;">1.6, 1.7</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1" style="text-align: center;">Android</td><td class="xtd-2-1 confluenceTd" colspan="1" style="text-align: center;">6.x, 7.x</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1" style="text-align: center;">iOS</td><td class="xtd-3-1 confluenceTd" colspan="1" style="text-align: center;">9, 10,11</td></tr></tbody></table>

Installing Dependencies
-----------------------

Due to the differences in computer environments, the Katalon download package does not include some dependencies needed to test on mobile devices/emulators. 

Attention

Some emulators have already supported Appium through their installations. Thus, if you want to run an application on an emulator, check you emulator's settings before proceeding with Appium installation.

### Android

If you want to test an Android application on your local device. You will need to install [Appium](http://appium.io/downloads.html). 

### iOS

Additionally, if you want to test iOS applications, you will need to download the packages below (which have been linked to their respective setting up instructions):

1.  [Xcode](https://itunes.apple.com/vn/app/xcode/id497799835?mt=12)
2.  [Command-line tool for Xcode](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)
3.  [WebDriverAgent](/display/KD/Installing+WebDriverAgent+for+iOS+devices)[](https://docs.katalon.com/x/TwbR)[](https://docs.katalon.com/x/9AXR#MobileonmacOS-InstallingWebDriverAgenttoiOSdevices)[ ](https://github.com/facebook/WebDriverAgent)
4.  [Appium](http://appium.io/downloads.html)

The Katalon Team suggests using [homebrew](https://brew.sh/) to install these dependencies. 

Setting Up Your Devices
-----------------------

### Android

*   Turn on the phone’s developer mode (go to **Settings **> **Developer options**).
*   Connect your Android Phone to your computer via a USB cable. Just confirm if prompted to accept/trust the device.
*   Install Android SDK: Katalon Studio will detect and ask you to install Android SDK automatically if your current machine doesn't have it. Please allow Katalon Studio to install it in this case.

### iOS

*   Connect your iOS Devices to your computer via a USB cable. Just confirm if prompted to accept/trust the phone.
*   If you want to execute your tests using Safari on iOS (mobile browser), make sure Web Inspector is turned on for Safari (Settings → Safari → Advanced → Web Inspector)
*   Enable the service UI automation on the device.
*   Connect the iOS device to Xcode.
*   **Settings** on the iOS device > **Developer** \> turn ON **UIAutomation**
*   To test an iOS native application file (**.ipa** file), follow these steps to check if an application file is already built and signed correctly:
    1.  1.  Open **Xcode** and navigate to **Window/Devices**
        2.  Choose your device from the Devices list
        3.  Press the “+” button and choose you application file  
            ![](../../images/katalon-studio/docs/mobile-on-macos/image2016-8-8 14_31_5.png)
        4.  If installed successfully, the application will appear in the Installed Apps section as shown below.  
            **![](../../images/katalon-studio/docs/mobile-on-macos/image2016-8-8 14_31_14.png)**

Verifiying the Setups
---------------------

### Android

After completing setting your environment, open a Mobile Testing Sample Project (which is packaged in your Katalon Studio installation) and execute a test suite using an Android device: 

![](../../images/katalon-studio/docs/mobile-on-macos/image2017-6-29 14_48_34.png)  
Select your device from the **Android Devices** list. Click **OK**. 

![](../../images/katalon-studio/docs/mobile-on-macos/image2018-1-26 18_39_1.png)

If your test suite runs successfully, you will see the results in the test reports as follow:

![](../../images/katalon-studio/docs/mobile-on-macos/image2018-6-15 17_47_28.png)

For more information on how to run a test suite, check out the documentation [here](/pages/viewpage.action?pageId=786668).

Finishing Steps
---------------

Once setting up successfully, follow the following guides to perform mobile testing in Katalon Studio

*   [Record Mobile Utility](/display/KD/Record+Mobile+Utility)
*   [Spy Mobile Utility](/display/KD/Spy+Mobile+Utility)
*   [Execute a Test Case or a Test Suite](/display/KD/Execute+a+Test+Case+or+a+Test+Suite)

Troubleshooting Common Issues
-----------------------------

_**Please refer to [this](https://docs.katalon.com/display/KD/Troubleshooting+automated+mobile+testing) troubleshooting tutorial**_
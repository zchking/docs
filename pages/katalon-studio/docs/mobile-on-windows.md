---
title: "Mobile on Windows" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-on-windows.html 
description: 
---
Katalon Studio Supported Environment on Windows
-----------------------------------------------

Unfortunately, you can only test an **iOS** application using **macOS**. If you wish to setup your macOS environment for Katalon Studio, please refer to [this guide](https://docs.katalon.com/x/9AXR).

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">&nbsp;</th><th class="xtd-0-1 confluenceTh" colspan="1" style="">Version</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Appium</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">1.6, 1.7</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">Android</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">6.x, 7.x</td></tr></tbody></table>

Installing Dependencies
-----------------------

Due to the diifferences in computer environments, the Katalon download package does not include some dependencies needed to test on mobile devices/emulators. Thus, in order to succesfully create and run a test case using Katalon Studio on Windows, you will need [Appium](http://appium.io/downloads.html).

Attention

Make sure you install Node.js into a location where you have full **Read** and **Write** permissions.

Setting Up Your Devices
-----------------------

*   Turn on the phone’s developer mode (go to **Settings **> **Developer options**).
*   Connect your Android Phone to your computer via a USB cable. Just confirm if prompted to accept/trust the device.
*   Install Android SDK: Katalon Studio will detect and ask you to install Android SDK automatically if your current machine doesn't have it. Please allow Katalon Studio to install it in this case.

Verifiying the Setup
--------------------

After completing setting your environment, open a Mobile Testing Sample Project (which is packaged in your Katalon Studio installation) and execute a test suite using an Android device: 

![](../../images/katalon-studio/docs/mobile-on-windows/image2017-6-29 14_48_34.png)  
Select your device from the **Android Devices** list. Click **OK**. 

![](../../images/katalon-studio/docs/mobile-on-windows/image2018-1-26 18_39_1.png)

If your test suite runs successfully, you will see the results in the test reports as follow:

![](../../images/katalon-studio/docs/mobile-on-windows/image2018-6-15 17_47_28.png)

For more information on how to run a test suite, check out the documentation [here](/pages/viewpage.action?pageId=786668).

Finishing Steps
---------------

Once setting up successfully, follow the following guides to perform mobile testing in Katalon Studio

*   [Record Mobile Utility](/display/KD/Record+Mobile+Utility)
*   [Spy Mobile Utility](/display/KD/Spy+Mobile+Utility)
*   [Execute a Test Case or a Test Suite](/display/KD/Execute+a+Test+Case+or+a+Test+Suite)

Troubleshooting Common Issues
-----------------------------

_**Please refer to [this](https://docs.katalon.com/display/KD/Troubleshooting+automated+mobile+testing) troubleshooting tutorial**_
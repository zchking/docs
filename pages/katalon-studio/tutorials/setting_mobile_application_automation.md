---
title: "Setting up for Mobile Application Automation"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/setting_mobile_application_automation.html
description: "Test automation for mobile app required to set up testing environment before performing any test. Learn how to perform mobile testing in Katalon Studio."
---
Test automation for mobile application required users to set up proper testing environment before performing any test. To perform Mobile testing on Katalon Studio required:

*   Node.js
*   Appium
*   Android/iOS device/emulator set up
*   AndroidSDK (packaged with Katalon Studio)

This tutorial illustrates how to set up environment for mobile app automation on both Windows operating systems.

Installing Node.js
------------------

Navigate to URL '[https://nodejs.org/en/download/](https://nodejs.org/en/download/)' to download _Node.js_. Download the file according to the bit size of your operating system (32 bit or 64 bit) and install it.

For more details on how to install Node.js, please refer to [http://blog.teamtreehouse.com/install-node-js-npm-windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

In order to successfully utilize Katalon Studio for mobile application automation, you will need to be able to run Node.js +6 and npm +3.  To make sure you have the appropriate version of **Node** and **npm** installed,

Open Windows Command Prompt/MacOS Terminal and type node -v for Node and npm -v for npm.

![run Node.js in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Install-Node.JS.png)

Installing Appium
-----------------

Open Command Prompt/Terminal and type the following command to install Appium:

**npm install –g appium**

To see if Appium is installed successfully, open Command Prompt/Terminal and type **appium**. This should show you the current version of your installed Appium (e.g: v1.6.5).

![Installing Appium in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Install-Appium.png)

Appium directory needs to be set after this installation.

Setting Up the Appium Directory
-------------------------------

1.  Open Katalon Studio and Go to **Window** Menu in the toolbar.
2.  Select **Katalon Studio Preferences > Katalon > Mobile**
3.  Set **Appium Directory** to the installed folder. User can browse or can paste the path.

By default, it's usually installed at _C:\\Users\\{user  login account}\\AppData\\Roaming\\npm\\node_modules\\appium._

How to Install a Mobile App Manually?
-------------------------------------

*   Step 1: Connect mobile device to the system
*   Step 2: Open Command Prompt/Terminal
*   Step 3: Type the command **adb install** "{**path of APK File**}".

Refer to the screenshot below as an example.

![Install a Mobile App Manually?](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Install-an-Mobile-App-Manually.png)

Set up devices
--------------

Refer to this [documentation](https://docs.katalon.com/display/KD/Mobile+on+Windows#MobileonWindows-SetupDevices) on setting test devices.

How to Install a Mobile App in Katalon Studio?
----------------------------------------------

Katalon Studio installs the application automatically while in Spy mobile, Record mobile, Run, or Debug mode if the application is previously not installed on the device.

As an example, let's see how it works in record mode.

*   Step 1: Click on **Record Mobile**

![record mode in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Record-Mobile-in-Katalon.png)

*   Step 2: Mobile recorder window will be launched. Select **Device Name**

![Mobile recorder window in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Device-Name.png)

*   Step 3: Browse application file

![Browse application file in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Browse-application-file.png)

*   Step 4: Click on **Start**

![Start-mobile-application-automation](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Start-mobile-application-automation.png)

*   Step 5: Application will be installed on the selected device, and Device View pane will be launched as shown in the screenshot below.

![Device View pane in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Device-View-pane-in-Katalon.png)

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Mobile on Windows](https://docs.katalon.com/display/KD/Mobile+on+Windows) guideline and join us on [Katalon Forum](http://forum.katalon.com/).
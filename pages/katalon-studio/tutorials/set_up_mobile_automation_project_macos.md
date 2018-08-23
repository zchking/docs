---
title: "Setting up Mobile automation project in macOS"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/set_up_mobile_automation_project_macos.html
description: "Using Katalon Studio, mobile automation tester can design automation test for both Android and iOS to run on physical devices, cloud services and emulators."
---
[](#)

Using Katalon Studio, a tester can design mobile app automation tests for both Android and iOS to run on physical devices, cloud services or emulators.  
  
This tutorial explains how to set up a mobile app testing project for Katalon Studio on macOS. It assumes that you are familiar with automated testing.

Setup Prerequisites
-------------------

Katalon Studio requires the latest installation of [Appium](http://appium.io/) and [Node.js](https://nodejs.org/en/). Please setup as the following steps:

*   Install [Homebrew](http://brew.sh/) from **Terminal**:

```groovy
/usr/bin/ruby -e "$(curl -fsSL
https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

*   Install [Carthage](https://github.com/Carthage/Carthage) with **Homebrew**:

```groovy
brew install carthage

```

*   Install **node** and **npm** with **Homebrew**:

```groovy
brew install node
 
brew install npm

```

Note: To make sure **Node.js** is installed correctly, you run the command **which node** on Terminal.

*   Install **Appium** with **npm**

<table><tbody><tr><td><span style="font-weight: 400;"><pre class="crayon-code"><code class="crayon-pre language-groovy" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7d7da2b5255700660048-1"><span class="crayon-e">npm </span><span class="crayon-v">install</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">g</span><span class="crayon-h"> </span><span class="crayon-v">appium</span>
</div></code></pre></span></td></tr></tbody></table>

*   Set Appium Directory to **“/usr/local/lib/node_modules/appium”** in Katalon Preferences (from Katalon menu, go to **Preferences > Katalon > Mobile)**

You will need to install and configure [Xcode](https://developer.apple.com/xcode/) in case of testing on iOS devices. Please set up Xcode as follows:

*   Open **Xcode > Preferences > Accounts**: Add developer’s Apple ID

![Add-acocunt-in-Xcode](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Add-acocunt-in-Xcode.png)

*   Open Terminal at **WebDriverAgent** in Appium directory folder:_<…>/appium/node_modules/appium-xcuitest-driver/WebDriverAgent_ and enter following command to initialize **WebDriverAgent** project:

```groovy
mkdir -p Resources/WebDriverAgent.bundle
 
sh ./Scripts/bootstrap.sh -d

```

*   Open project **WebDriverAgent.xcodeproj** under**WebDriverAgent** in Xcode.

![Open-WebDriverAgent.xcodeproj](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Open-WebDriverAgent.xcodeproj.png)

*   Select **WebDriverAgentLib**, and in the Signing section, check **Automatically manage signing** and select a team.

![Select-target-WebDriverAgentLib](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Select-target-WebDriverAgentLib.png)

*   Then on Xcode’s menu bar, select **Product > Build**

![Select-Build](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Select-Build.png)

*   Repeat the last two steps for **WebDriverAgentRunner**

*   Build **WebDriverAgent** to verify whether the steps above work

<table><tbody><tr><td><span style="font-weight: 400;"><pre class="crayon-code"><code class="crayon-pre language-groovy" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-5b7d7da2b525b351315548-1"><span class="crayon-v">xcodebuild</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-e">project </span><span class="crayon-v">WebDriverAgent</span><span class="crayon-sy">.</span><span class="crayon-v">xcodeproj</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-e">scheme </span><span class="crayon-v">WebDriverAgentRunner</span><span class="crayon-h"> </span><span class="crayon-o">-</span><span class="crayon-i">destination</span><span class="crayon-h"> </span><span class="crayon-s">'id=&lt;udid&gt;'</span><span class="crayon-h"> </span><span class="crayon-v">test</span>
</div></code></pre></span><p></p><p><span style="font-weight: 400;">Note: &lt;udid&gt; is the device UDID of your mobile device.</span></p></td></tr></tbody></table>

*   If the following dialog is shown, select **Always Allow**

![Always-allow](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Always-allow.png)

*   You should be able to see _Listening on USB _in the build output as below

![Build-Output](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Build-Output.png)

Setup Devices
-------------

For Android devices:

*   Turn on your Android device’s developer mode (go to **Settings** \> **Developer options**).
*   Connect the device to your computer via a USB cable. Just confirm if prompted for accepting/trusting the device.

For iOS devices:

*   Connect your iOS Devices to your computer via a USB cable. Just confirm if prompted for accepting/trusting the phone.
*   **For iOS 8 and higher**, you must enable the service UI automation on the device (connect the iOS device to Xcode) as follows:
    1.  plug in the iOS device
    2.  open Xcode on Mac
    3.  go to **Settings** on the device > **Developer** \> turn ON **UIAutomation**
*   **For iOS 6 and higher**, on your iOS device, go to **Settings > Safari > Advanced** and enable **Web Inspector**

To test an iOS native application file (**.ipa** or **.app** file), make sure the file is already built and signed properly to deploy on the device. Follow these steps to check if an application file is already built and signed correctly:1\. Open **Xcode** and navigate to **Window/Devices  
**2\. Choose your device from the Devices list  
3\. Press the “+” button and choose your application file  
  
![Choose-your-application-file](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Choose-your-application-file.png)

4\. If installed successfully, the application will appear in the Installed Apps section as shown below

![Installed-successfully](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Installed-successfully.png)

Desired Capabilities
--------------------

You can modify extra **Desired Capabilities** when executing automation test in Katalon Studio.

To define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge, please access **Project > Settings > Execution > Default > Mobile > iOS** (or Android).

The example below shows Desired Capabilities settings for Android to enable Unicode inputs.

![Desired-capabilities-setting](../../images/katalon-studio/tutorials/set_up_mobile_automation_project_macos/Desired-capabilities-setting-1024x673.png)

Refer to [Desired Capabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) for which properties of each web browser are supported by Selenium. For Desired Capabilities to be used with Appium, refer to [Appium server capabilities](https://appium.io/docs/en/writing-running-appium/caps/).

[](#modal-id-popup)
---
title: "Setting up Mobile automation project in macOS"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/set_up_mobile_automation_project_macos.html
description: "Using Katalon Studio, mobile automation tester can design automation test for both Android and iOS to run on physical devices, cloud services and emulators."
---
Using Katalon Studio, a tester can design mobile app automation tests for both Android and iOS to run on physical devices, cloud services or emulators.  
  
This tutorial explains how to set up a mobile app testing project for Katalon Studio on macOS. It assumes that you are familiar with automated testing.

Setup Prerequisites
-------------------

Katalon Studio requires the latest installation of Appium and Node.js. Please setup as the following steps:

*   Install Homebrew from **Terminal**:

```
/usr/bin/ruby -e "$(curl -fsSL
https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

*   Install Carthage with **Homebrew**:

```
brew install carthage

```

*   Install **node** and **npm** with **Homebrew**:

```
brew install node
 
brew install npm

```

Note: To make sure **Node.js** is installed correctly, you run the command **which node** on Terminal.

*   Install **Appium** with **npm**

<table><tbody><tr><td><span><pre><code><div><span>npm </span><span>install</span><span> </span><span>-</span><span>g</span><span> </span><span>appium</span>
</div></code></pre></span></td></tr></tbody></table>

*   Set Appium Directory to **“/usr/local/lib/node_modules/appium”** in Katalon Preferences (from Katalon menu, go to **Preferences > Katalon > Mobile)**

You will need to install and configure Xcode in case of testing on iOS devices. Please set up Xcode as follows:

*   Open **Xcode > Preferences > Accounts**: Add developer’s Apple ID

*   Open Terminal at **WebDriverAgent** in Appium directory folder:_<…>/appium/node_modules/appium-xcuitest-driver/WebDriverAgent_ and enter following command to initialize **WebDriverAgent** project:

```
mkdir -p Resources/WebDriverAgent.bundle
 
sh ./Scripts/bootstrap.sh -d

```

*   Open project **WebDriverAgent.xcodeproj** under**WebDriverAgent** in Xcode.

*   Select **WebDriverAgentLib**, and in the Signing section, check **Automatically manage signing** and select a team.

*   Then on Xcode’s menu bar, select **Product > Build**

*   Repeat the last two steps for **WebDriverAgentRunner**

*   Build **WebDriverAgent** to verify whether the steps above work

<table><tbody><tr><td><span><pre><code><div><span>xcodebuild</span><span> </span><span>-</span><span>project </span><span>WebDriverAgent</span><span>.</span><span>xcodeproj</span><span> </span><span>-</span><span>scheme </span><span>WebDriverAgentRunner</span><span> </span><span>-</span><span>destination</span><span> </span><span>'id=&lt;udid&gt;'</span><span> </span><span>test</span>
</div></code></pre></span><p></p><p><span>Note: &lt;udid&gt; is the device UDID of your mobile device.</span></p></td></tr></tbody></table>

*   If the following dialog is shown, select **Always Allow**

*   You should be able to see _Listening on USB _in the build output as below

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
  

4\. If installed successfully, the application will appear in the Installed Apps section as shown below

Desired Capabilities
--------------------

You can modify extra **Desired Capabilities** when executing automation test in Katalon Studio.

To define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge, please access **Project > Settings > Execution > Default > Mobile > iOS** (or Android).

The example below shows Desired Capabilities settings for Android to enable Unicode inputs.

Refer to Desired Capabilities for which properties of each web browser are supported by Selenium. For Desired Capabilities to be used with Appium, refer to Appium server capabilities.